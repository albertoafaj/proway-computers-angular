import { Injectable } from '@angular/core';
import { IProduct, products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: IProduct[] = products;
  quantity = 1;
  constructor() { }

  getAll() {
    return this.products;
  }

  getOne(productId: number) {
    return this.products.find(product => product.id === productId);
  }
}
