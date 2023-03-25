import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { NotificationService } from 'src/app/notification.service';
import { Cart, IProduct } from 'src/app/products';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product: IProduct | undefined;
  quantity = 1;
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private _cartService: CartService
  ) {
  };
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get("id"));
    this.product = this.productsService.getOne(productId)
    console.log(this.product);
  };
  addCart() {
    this.notificationService.notify("O produto foi adicionado ao carrinho")
    const product: Cart = {
      ...this.product!,
      quantity: this.quantity
    }
    this._cartService.addToCart(product);
  };

};
