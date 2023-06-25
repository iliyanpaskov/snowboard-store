import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnChanges {

    
    constructor (private orders:OrdersService ) {}
    
    cartProducts = this.orders.ordersList;
    totalPrice= this.orders.totalPrice;
    
    
    
    ngOnChanges(changes: SimpleChanges): void {
        throw new Error('Method not implemented.');
    }

}
