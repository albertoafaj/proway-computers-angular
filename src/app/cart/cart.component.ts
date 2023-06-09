import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Cart } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Cart[] = [];
  total = 0;

  constructor(
    public cartService: CartService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
    this.totalAmount();
  }

  totalAmount() {
    this.total = this.cartItems.reduce((prev, curr) => prev + (curr.price * curr.quantity), 0);
  }

  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
    this.cartService.removeFromCart(productId);
    this.totalAmount();
  }

  buy() {
    alert("Congratulations, you have finalized your purchase!");
    this.cartService.cleanCart();
    this._router.navigate(["products"]);
  }
}