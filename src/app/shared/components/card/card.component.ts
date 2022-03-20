import { Component, Input, OnInit } from '@angular/core';
import { Beer, BeerInfoArray, urlType } from '@app/models/models';
import { BehaviorSubject, Observable } from 'rxjs';
@Component({
  selector: 'fakeshop-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() beer$!: Observable<Beer>;

  myBeer!: BeerInfoArray;
  urlBeer!: urlType[1];
  constructor() {}
  ngOnInit(): void {
    this.beer$.subscribe((beer) => {
      this.myBeer = Object.entries(beer) as BeerInfoArray;
      this.urlBeer = this.myBeer.pop()![1] as urlType[1];
    });
  }

  ngOnChange() {}
}
