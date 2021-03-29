import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ProductsRoutingModule } from './products-routing.module'
import { ProductsComponent } from './products/products.component'
import { ProductAddEditComponent } from './products/product-add-edit/product-add-edit.component'
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms'

@NgModule({
    declarations: [ProductsComponent, ProductAddEditComponent],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        ReactiveFormsModule,
        FormsModule,
    ],
})
export class ProductsModule {}
