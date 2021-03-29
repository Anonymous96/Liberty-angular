import { Component, OnInit } from '@angular/core'
import { distributor } from 'src/app/models/distributor.model'
import { Product } from 'src/app/models/Product.model'
import { DistributorService } from 'src/app/services/distributor.service'
import { ProductService } from 'src/app/services/product.service'

@Component({
    selector: 'app-sale-add',
    templateUrl: './sale-add.component.html',
    styleUrls: ['./sale-add.component.css'],
})
export class SaleAddComponent implements OnInit {
    distributors: distributor[]
    products: Product[]
    parentId: number
    productId: number
    selected: Product[]
    product: any

    constructor(
        private distributorService: DistributorService,
        private productService: ProductService
    ) {}

    ngOnInit(): void {
        this.getDistributors()
        this.getProducts()
        this.getProduct()
    }
    getProduct() {
        const name = 'sprite'
        this.product = this.products.find((a) => a.productName === name)
        console.log(this.product, 'd1')
    }
    getDistributors() {
        this.distributorService.getDistributors().subscribe(
            (data) => {
                this.distributors = data
            },
            (err) => console.log(err),
            () => console.log(this.distributors)
        )
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
}
