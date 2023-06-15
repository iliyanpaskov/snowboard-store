import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthRoutingModule } from './auth-routing.module';
import { OrdersComponent } from './orders/orders.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    ProfileComponent,
    OrdersComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
