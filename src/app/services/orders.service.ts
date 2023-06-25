import { Injectable } from '@angular/core';
import { CartProduct } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  counter: number = 0;
  ordersList: CartProduct[] = [];
  totalPrice: number = 0;
  constructor() { }

  addToCart(product:CartProduct){
    this.ordersList.push(product);
    this.counter = this.ordersList.length;
    this.totalPrice = 0;
    this.ordersList.forEach(product => {
      this.totalPrice += Number(product.price);
    })
  }


}
