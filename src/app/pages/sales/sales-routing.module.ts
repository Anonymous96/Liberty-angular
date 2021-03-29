import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaleAddComponent } from './sales/sale-add/sale-add.component';
import { SalesComponent } from './sales/sales.component';

const routes: Routes = [{
  path: '',
  component: SalesComponent
},{
  path: 'add-sale',
  component: SaleAddComponent
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
