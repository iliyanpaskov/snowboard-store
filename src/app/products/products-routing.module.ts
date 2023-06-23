import { RouterModule, Routes } from "@angular/router";
import { AllProductsComponent } from "./all-products/all-products.component";
import { SnowboardsComponent } from "./snowboards/snowboards.component";
import { BootsComponent } from "./boots/boots.component";
import { BindingsComponent } from "./bindings/bindings.component";
import { AccessoriesComponent } from "./accessories/accessories.component";
import { ClothingComponent } from "./clothing/clothing.component";
import { SnowboardDetailsComponent } from "./snowboard-details/snowboard-details.component";
import { BootsDetailsComponent } from "./boots-details/boots-details.component";

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
                component: BindingsComponent,
            },
            {
                path:"accessories",
                pathMatch:"full",
                component: AccessoriesComponent,
            },
            {
                path:"clothing",
                pathMatch:"full",
                component: ClothingComponent,
            },
            {
                path:"snowboards/:id",
                component:SnowboardDetailsComponent
            },
            {
                path:"boots/:id",
                component:BootsDetailsComponent
            },
           

        ]
    },
]

export const ProductsRoutingModule = RouterModule.forChild(routes);