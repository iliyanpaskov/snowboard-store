import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { OrdersService } from 'src/app/services/orders.service';
import { IUserProfile } from 'src/app/shared/interfaces';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements DoCheck, OnInit {


    constructor(private orders: OrdersService, private auth: AuthService, private router: Router) { }

    cartProducts = this.orders.ordersList;
    totalPrice = this.orders.totalPrice;
    token: any = this.auth.user?.sessionToken;
    user: IUserProfile | any = []
    isCartEmpty: boolean = false;
    isLoading:boolean = true; 


    removeHandler(id: string): void {
        this.orders.removeFromCart(id)
    }

    sendOrderHandler(id: string, token: string) {
        const updateOrders = async () => {
            const orders = this.user.orders.concat(this.cartProducts);
            const res = await this.orders.sendOrder(id, token, orders);
            this.orders.counter = 0;
            this.orders.totalPrice = 0;
            this.orders.ordersList = [];
        }
        updateOrders();
        this.router.navigate(['/products'])
    }

    ngDoCheck(): void {
        this.cartProducts = this.orders.ordersList;
        if(this.cartProducts.length < 1){
            this.isCartEmpty = true
        } else {
            this.isCartEmpty = false
        }
        this.totalPrice = this.orders.totalPrice;
    }

    ngOnInit(): void {
        const userData = async () => {
            const res = await this.auth.currentUser(this.token)
            this.user = res;
            this.isLoading = false;
        }
        userData();
    }

}
