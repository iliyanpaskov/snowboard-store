import { Component, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { OrdersService } from 'src/app/services/orders.service';
import { IUserLogin } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent implements DoCheck {

  isLoggedIn = false;
  user: IUserLogin | any = null

  constructor(public auth: AuthService, public orders: OrdersService) { }

  count:number = this.orders.counter;

  ngDoCheck(): void {
    this.isLoggedIn = this.auth.isLoggedIn;
    this.user = this.auth.user;
    this.count = this.orders.counter;
  }
}
