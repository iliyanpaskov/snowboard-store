import { RouterModule, Routes } from "@angular/router";
import { AllProductsComponent } from "./all-products/all-products.component";

const routes: Routes = [
    {
        path:"products",
        component: AllProductsComponent,
    },
]

export const ProductsRoutingModule = RouterModule.forChild(routes);