import { Component, DoCheck, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { OrderItem } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit,DoCheck{

  currentUserOrders: OrderItem[] = [];
  token: any = this.auth.user?.sessionToken;

  constructor(private auth:AuthService ){}
  
  ngDoCheck(): void {
    this.currentUserOrders
  }
  
  ngOnInit(): void {
    const userData = async () => {
      const res = await this.auth.currentUser(this.token)
      this.currentUserOrders = res?.orders; //?
      console.log(this.token);
      console.log(this.currentUserOrders);
      
      
    }
    userData();
  }

}
