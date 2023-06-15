import { RouterModule, Routes } from "@angular/router";
import { LoaderComponent } from "../shared/loader/loader.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { ProfileComponent } from "./profile/profile.component";
import { OrdersComponent } from "./orders/orders.component";
import { CartComponent } from "./cart/cart.component";


const routes: Routes = [
    {
        path: 'auth/login',
        component: LoaderComponent,
    },
    {
        path: 'auth/signup',
        component: SignUpComponent,
    },
    {
        path: 'auth/my-profile',
        component: ProfileComponent,
    },
    {
        path: 'auth/my-orders',
        component: OrdersComponent,
    },
    {
        path: 'auth/my-cart',
        component: CartComponent,
    },
];

export const AuthRoutingModule = RouterModule.forChild(routes);

