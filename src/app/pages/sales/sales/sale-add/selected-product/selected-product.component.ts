import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product.model';

@Component({
  selector: 'app-selected-product',
  templateUrl: './selected-product.component.html',
  styleUrls: ['./selected-product.component.css']
})
export class SelectedProductComponent implements OnInit {
  @Input()
  selectedProducts: Product[] = [];
  total:number;


  constructor() { }

  ngOnInit(): void {
  }
  

}
