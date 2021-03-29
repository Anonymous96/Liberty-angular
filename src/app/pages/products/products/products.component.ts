import { Component, OnInit } from '@angular/core'
import { ToastrService } from 'ngx-toastr'
import { Product } from 'src/app/models/Product.model'
import { ProductService } from 'src/app/services/product.service'

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
    products: Product[]
    constructor(
        private productService: ProductService,
        private toastr: ToastrService
    ) {}

    ngOnInit(): void {
        this.getProducts()
    }

    getProducts() {
        this.productService.getProducts().subscribe(
            (data) => {
                this.products = data
            },
            (err) => console.log(err),
            () => console.log(this.products)
        )
    }
    deleteProduct(product) {
        var index = this.products.indexOf(product)
        this.productService.deleteProducts(product.id).subscribe((data) => {
            this.toastr.success('პროდუქცია წარმატებით წაიშალა')
            this.products.splice(index, 1)
        })
    }
}
