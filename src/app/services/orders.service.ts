import { Injectable } from '@angular/core';
import { CartProduct } from '../shared/interfaces';
import { environment } from 'src/environments/environment';

const signupURL = environment.apiSignUpURL;

const headers = {
  'X-Parse-Application-Id': environment.applicationId,
  'X-Parse-REST-API-Key': environment.apiKey,
  'X-Parse-Revocable-Session': environment.session,
  'Content-Type': environment.contentType
}

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
    this.counter = this.ordersList.length;
    this.totalPrice = 0;
    this.ordersList.forEach(product => {
      this.totalPrice += Number(product.price);
    })
  }

  // async sendOrder(id: string, token: string,username:string, email:string, address:string, fullName:string, phone:string,orders:CartProduct[]) {
  async sendOrder(id: string, token: string, orders: CartProduct[]) {
    const url = `${signupURL}/${id}`
    try {
      const res = await fetch(url, {
        method: "PUT",
        headers: {
          'X-Parse-Application-Id': environment.applicationId,
          'X-Parse-REST-API-Key': environment.apiKey,
          'X-Parse-Session-Token': token,
          'Content-Type': environment.contentType
        },
        body: JSON.stringify({
          orders
        })
      })
      const data = await res.json();
      if (!data.error) {
        return data
      } else {
        throw data.error
      }
    } catch (error) {
      console.log(error);
    }
  }

}
