import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Product } from '../models/Product.model'

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    constructor(private http: HttpClient) {}

    public getProducts(): Observable<Array<Product>> {
        return <Observable<Array<Product>>>(
            this.http.get(environment.apiUrl + '/products')
        )
    }

    public getProductsById(id: number): Observable<Product> {
        return <Observable<Product>>(
            this.http.get(environment.apiUrl + '/products/' + id)
        )
    }

    public insertProducts(product: Product): Observable<any> {
        return this.http.post(environment.apiUrl + '/products', product)
    }

    public deleteProducts(id: number): Observable<any> {
        return this.http.delete(environment.apiUrl + '/products/' + id)
    }
}
