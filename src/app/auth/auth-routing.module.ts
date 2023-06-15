import { RouterModule, Routes } from "@angular/router";
import { LoaderComponent } from "../shared/loader/loader.component";
import { SignUpComponent } from "./sign-up/sign-up.component";


const routes: Routes = [
    {
        path: 'auth/login',
        component: LoaderComponent,
    },
    {
        path: 'auth/signup',
        component: SignUpComponent,
    }
];

export const AuthRoutingModule = RouterModule.forChild(routes);

