import { Component } from '@angular/core';
import { Beer } from '@app/models/models';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'fakeshop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'FakeE-Shop';
  beer!: Observable<Beer>;

  constructor() {}

  ngOnInit(): void {}

  fetchById(beer: Observable<Beer>): void {
    this.beer = beer;
  }
}
