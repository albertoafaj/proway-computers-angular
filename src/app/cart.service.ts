import { Injectable } from '@angular/core';
import { Cart } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Cart[] = [];

  constructor() { }

  getCart() {
    this.items = JSON.parse(localStorage.getItem("cart") || "[]");
    return this.items;
  }

  addToCart(product: Cart) {
    this.items.push(product);
    localStorage.setItem("cart", JSON.stringify(this.items));
  }

  removeFromCart(productId: number) {
    this.items = this.items.filter(item => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(this.items));
  }

  cleanCart() {
    this.items = [];
    localStorage.clear();
  }
}