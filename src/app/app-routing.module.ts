import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'distributors',
    loadChildren: () => import('src/app/pages/distributors/distributors.module').then(a => a.DistributorsModule)
  },
  {
    path: 'products',
    loadChildren: () => import('src/app/pages/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'sales',
    loadChildren: () => import('src/app/pages/sales/sales.module').then(s => s.SalesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
