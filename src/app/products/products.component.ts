import { Component } from '@angular/core';
import { IProduct, products } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: IProduct[] | undefined = products;
  constructor(
    private productsService: ProductsService
  ) { }
  ngOnInit(): void {
    this.products = this.productsService.getAll();
  }

}
