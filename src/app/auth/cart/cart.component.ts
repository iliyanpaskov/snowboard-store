import { Component,DoCheck } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements DoCheck {

    
    constructor (private orders:OrdersService ) {}
    
    cartProducts = this.orders.ordersList;
    totalPrice= this.orders.totalPrice;
    
    removeHandler(id:string){
        this.orders.removeFromCart(id)
    }
    
    
    ngDoCheck(): void {
        this.cartProducts = this.orders.ordersList;
        this.totalPrice= this.orders.totalPrice;
    }

}
