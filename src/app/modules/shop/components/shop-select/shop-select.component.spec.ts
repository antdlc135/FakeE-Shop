import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopSelectComponent } from './shop-select.component';

describe('ShopSelectComponent', () => {
  let component: ShopSelectComponent;
  let fixture: ComponentFixture<ShopSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
