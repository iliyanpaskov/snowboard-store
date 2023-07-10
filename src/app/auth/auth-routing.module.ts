import { RouterModule, Routes } from "@angular/router";

import { SignUpComponent } from "./sign-up/sign-up.component";
import { ProfileComponent } from "./profile/profile.component";
import { OrdersComponent } from "./orders/orders.component";
import { CartComponent } from "./cart/cart.component";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { UpdateProfileComponent } from "./update-profile/update-profile.component";
import { AuthGuard } from "../shared/guards/auth.guard";


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
        canActivate: [AuthGuard],
        component: ProfileComponent,
    },
    {
        path: 'profile-update',
        canActivate: [AuthGuard],
        component: UpdateProfileComponent,
    },
    {
        path: 'auth/my-orders',
        canActivate: [AuthGuard],
        component: OrdersComponent,
    },
    {
        path: 'auth/my-cart',
        canActivate: [AuthGuard],
        component: CartComponent,
    },
];

export const AuthRoutingModule = RouterModule.forChild(routes);

