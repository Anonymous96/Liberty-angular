import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ProductAddEditComponent } from './products/product-add-edit/product-add-edit.component'
import { ProductsComponent } from './products/products.component'

const routes: Routes = [
    {
        path: '',
        component: ProductsComponent,
    },
    {
        path: 'add-product',
        component: ProductAddEditComponent,
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProductsRoutingModule {}
