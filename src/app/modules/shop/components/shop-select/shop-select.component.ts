import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Beer, BeerName, BeerSize } from '../../../../models/models';
// import formValidator from './form-validators';
import {
  BehaviorSubject,
  combineLatest,
  concatMap,
  debounceTime,
  Observable,
} from 'rxjs';
import { FetchCardService } from '../../../../shared/services/fetch-card.service';
import { BeerNameType, BeerSizeType } from '../../../../models/models';

@Component({
  selector: 'fakeshop-shop-select',
  templateUrl: './shop-select.component.html',
  styleUrls: ['./shop-select.component.scss'],
})
export class ShopSelectComponent implements OnInit {
  @Output() private beerEmit = new EventEmitter<BehaviorSubject<Beer>>();

  private beer!: Beer;
  private beer$ = new BehaviorSubject<Beer>({
    id: 'Scegli da id!',
    size: 'da misura',
    name: 'o da nome',
    price: 0,
    url: 'nero.png',
  } as unknown as Beer);

  sizes = Object.keys(BeerSize).filter(
    (key: string) => key === 'small' || key === 'medium'
  );
  names = Object.keys(BeerName).slice(
    -Math.ceil(Object.keys(BeerName).length / 2)
  );

  // formValidator = formValidator;
  searchForm = this.fb.group(
    {
      name: ['', [Validators.required]],
      size: ['', [Validators.required]],
      id: ['', [Validators.required]],
    }
    // ,{ validators: [this.formValidator] }
  );

  constructor(
    private fb: FormBuilder,
    private fetchCardService: FetchCardService
  ) {}

  ngOnInit(): void {
    this.fetchCardService.updateBeers();
    this.beerEmit.emit(this.beer$);

    this.fromNameAndSize();
    this.fromId();
  }

  fromNameAndSize() {
    let valuesObs = {
      name: this.searchForm.get('name')
        ?.valueChanges as Observable<BeerNameType>,
      size: this.searchForm.get('size')
        ?.valueChanges as Observable<BeerSizeType>,
    };

    combineLatest(valuesObs)
      .pipe(
        debounceTime(0),
        concatMap((beerHigh) =>
          this.fetchCardService.getId(beerHigh.name, beerHigh.size)
        )
      )
      .subscribe((innerBeer) => {
        this.searchForm.patchValue({
          id: Number(innerBeer.id),
        });
      });
  }

  fromId() {
    this.searchForm
      .get('id')
      ?.valueChanges.pipe(
        concatMap((id: number) => this.fetchCardService.getBeer(id))
      )
      .subscribe((beer: Beer) => {
        this.beer = beer;
        this.searchForm.patchValue({ name: beer.name, size: beer.size });
      });
  }

  updateValue() {
    this.beer$.next(this.beer);
  }
}
