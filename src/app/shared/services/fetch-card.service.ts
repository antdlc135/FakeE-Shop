import { Injectable } from '@angular/core';

import { Beer, BeerNameType, BeerSizeType } from '@app/models/models';

import { from, Observable } from 'rxjs';
import { filter, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FetchCardService {
  private beersEndpointUrl: string = environment.apiEndPointUrl;
  private beers$!: Observable<Beer>;

  constructor(private httpClient: HttpClient) {}

  updateBeers() {
    this.httpClient
      .get<Beer[]>(this.beersEndpointUrl)
      .subscribe((beers: Beer[]) => {
        this.beers$ = from(beers);
      });
  }

  getBeer(id: number): Observable<Beer> {
    return this.beers$.pipe(filter((el) => el.id === id));
  }

  getId(name: BeerNameType, size: BeerSizeType): Observable<Beer> {
    return this.beers$.pipe(
      filter((el) => el.name === name),
      filter((el) => el.size === size)
    );
  }
}
