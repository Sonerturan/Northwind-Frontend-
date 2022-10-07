import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //:veritürü Type script ile geliştirliimiştir normalde java da tip güvenliği yoktur belirtilmez ne değer girirsen o türü alır
  title: string = "northwind";
  //satır sonlarında ; zorunlu değildir
  //user: string = "Soner Turan"
  //any veri türü herşey olabilir
  //{} obje için kullanılır, [] array için kullanılır
  //product1: any = { productId: 1, productName: 'Cup', categoryId: 1, unitPrice: 5 }
  //product2: any = { productId: 2, productName: 'Laptop', categoryId: 1, unitPrice: 5 }
  //product3: any = { productId: 3, productName: 'Mause', categoryId: 1, unitPrice: 5 }
  //product4: any = { productId: 4, productName: 'Keyboard', categoryId: 1, unitPrice: 5 }
  //product5: any = { productId: 5, productName: 'Camera', categoryId: 1, unitPrice: 5 }
  //yerine şu kullanılabilir
  //products=[{ productId: 1, productName: 'Cup', categoryId: 1, unitPrice: 5 },{ productId: 2, productName: 'Laptop', categoryId: 1, unitPrice: 5 }]
  //bu da kullanılabilir
  //products = [this.product1, this.product2, this.product3, this.product4, this.product5]
}
