import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SalesComponent } from './sales/sales.component';
import { SaleAddComponent } from './sales/sale-add/sale-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SelectedProductComponent } from './sales/sale-add/selected-product/selected-product.component';



@NgModule({
  declarations: [SalesComponent, SaleAddComponent,SelectedProductComponent],
  imports: [
    CommonModule,
    SalesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SalesModule { }
