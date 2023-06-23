import { RouterModule, Routes } from "@angular/router";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { ProfileComponent } from "./profile/profile.component";
import { OrdersComponent } from "./orders/orders.component";
import { CartComponent } from "./cart/cart.component";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { UpdateProfileComponent } from "./update-profile/update-profile.component";


const routes: Routes = [
    {
        path: 'auth/login',
        component: LoginComponent,
    },
    {
        path: 'auth/signup',
        component: SignUpComponent,
    },
    {
        path: 'auth/logout',
        component: LogoutComponent,
    },
    {
        path: 'auth/my-profile',
        component: ProfileComponent,
    },
    {
        path: 'profile-update',
        component: UpdateProfileComponent,
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

