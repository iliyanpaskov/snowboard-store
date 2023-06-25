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

  addToCart(product: CartProduct): void {
    this.ordersList.push(product);
    this.counter = this.ordersList.length;
    this.totalPrice = 0;
    this.ordersList.forEach(product => {
      this.totalPrice += Number(product.price);
    })
  }

  removeFromCart(id: string): void {
    this.ordersList = this.ordersList.filter(product => product.objectId !== id);
    // const index = Object.values(this.ordersList).indexOf(id);
    // console.log(index);
    // const firstPart = this.ordersList.slice(0, index);
    // const secondPart = this.ordersList.slice(index);
    // this.ordersList = firstPart.concat(secondPart)
    // this.ordersList = this.ordersList.splice(index, 1)

    this.counter = this.ordersList.length;
    this.totalPrice = 0;
    this.ordersList.forEach(product => {
      this.totalPrice += Number(product.price);
    })
  }

}
