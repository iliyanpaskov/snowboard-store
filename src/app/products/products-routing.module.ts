import { RouterModule, Routes } from "@angular/router";
import { AllProductsComponent } from "./all-products/all-products.component";
import { SnowboardsComponent } from "./snowboards/snowboards.component";

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

        ]
    },
]

export const ProductsRoutingModule = RouterModule.forChild(routes);