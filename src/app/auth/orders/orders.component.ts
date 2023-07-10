import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { OrdersService } from 'src/app/services/orders.service';
import { OrderItem } from 'src/app/shared/interfaces';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit, DoCheck {

    currentUserOrders: OrderItem[] = [];
    token = this.auth.user?.sessionToken as string;
    userId = this.auth.user?.objectId as string;
    isLoading: boolean = true;
    hasOrders: boolean = false;
    restUserOrders: OrderItem[] = [];

    constructor(private auth: AuthService, private orders: OrdersService, private router:Router) { }

    cancelOrderHandler(id: string) {
        this.restUserOrders = this.currentUserOrders.filter(product => product.objectId !== id);
        const restOrders = async () => {
            await this.orders.cancelOrder(this.userId, this.token, this.restUserOrders);
            this.router.navigate(['/']);
        }
        restOrders();

    }

    ngDoCheck(): void {
        this.currentUserOrders
    }

    ngOnInit(): void {
        const userData = async () => {
            const res = await this.auth.currentUser(this.token);
            this.currentUserOrders = res?.orders; 
            this.isLoading = false;
            if (this.currentUserOrders.length > 0) {
                this.hasOrders = true;
            }
        }
        userData();
    }

}
