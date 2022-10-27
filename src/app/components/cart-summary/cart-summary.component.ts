import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/cartItem';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css'],
})
export class CartSummaryComponent implements OnInit {
  cartItems: CartItem[]=[];
  products: Product[] = [];

  constructor(private cartService: CartService,
    private toastrService: ToastrService) {}

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this.cartItems = this.cartService.list();
  }
  removeFromCart(product: Product) {
      this.toastrService.warning("Ürün sepetten silindi",product.productName)
      this.cartService.removeFromCart(product)
  }
  addToCart(product: Product) {
    if(product.productId===1){
      this.toastrService.error("Ürün sepete eklenemiyor","Hata")
    }else{
      this.toastrService.info("Ürün miktarı arttırıldı",product.productName)
      this.cartService.addToCart(product)
    }
  }
}
