import { RouterModule, Routes } from "@angular/router";
import { AllProductsComponent } from "./all-products/all-products.component";
import { SnowboardsComponent } from "./snowboards/snowboards.component";
import { BootsComponent } from "./boots/boots.component";

const routes: Routes = [
    {
        path:"products",
        children:[
            {
                path:'',
                pathMatch:'full',
                component: AllProductsComponent,
            },
            {
                path:"snowboards",
                pathMatch:"full",
                component: SnowboardsComponent,
            },
            {
                path:"boots",
                pathMatch:"full",
                component: BootsComponent,
            },
            {
                path:"bindings",
                pathMatch:"full",
                component: SnowboardsComponent,
            },
            {
                path:"accessories",
                pathMatch:"full",
                component: SnowboardsComponent,
            },
            {
                path:"clothing",
                pathMatch:"full",
                component: SnowboardsComponent,
            },

        ]
    },
]

export const ProductsRoutingModule = RouterModule.forChild(routes);