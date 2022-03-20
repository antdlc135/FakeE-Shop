import { Component } from '@angular/core';
import { Beer } from '@app/models/models';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'fakeshop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'FakeE-Shop';
  beer!: BehaviorSubject<Beer>;

  constructor() {}

  ngOnInit(): void {}

  fetchById(beer: BehaviorSubject<Beer>): void {
    this.beer = beer;
  }
}
