import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr'
import { throwError } from 'rxjs'
import { Product } from 'src/app/models/Product.model'
import { ProductService } from 'src/app/services/product.service'

@Component({
    selector: 'app-product-add-edit',
    templateUrl: './product-add-edit.component.html',
    styleUrls: ['./product-add-edit.component.css'],
})
export class ProductAddEditComponent implements OnInit {
    products: Product[]
    productForm: FormGroup

    constructor(
        private productService: ProductService,
        private toastr: ToastrService
    ) {}

    ngOnInit(): void {
        this.productForm = new FormGroup({
            productCode: new FormControl('', Validators.required),
            productName: new FormControl('', Validators.required),
            productPrice: new FormControl('', Validators.required),
        })
    }

    addProduct() {
        if (this.productForm.valid) {
            this.productService
                .insertProducts(this.productForm.value)
                .subscribe(
                    (data) => {
                        this.toastr.success('პროდუქცია წარმატებით დაემატა')
                        this.productForm.reset()
                        return true
                    },
                    (error) => {
                        return throwError(error)
                    }
                )
        } else {
            this.toastr.warning('გთხოვთ შეავსოთ ფორმა')
        }
    }
}
