import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@app/shared/shared.module';

import { ShopSelectComponent } from './components/shop-select/shop-select.component';

@NgModule({
  declarations: [ShopSelectComponent],
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  exports: [ShopSelectComponent],
})
export class ShopModule {}
