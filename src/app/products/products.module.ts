import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SnowboardsComponent } from './snowboards/snowboards.component';
import { BootsComponent } from './boots/boots.component';
import { BindingsComponent } from './bindings/bindings.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { ClothingComponent } from './clothing/clothing.component';
import { SnowboardDetailsComponent } from './snowboard-details/snowboard-details.component';
import { BootsDetailsComponent } from './boots-details/boots-details.component';
import { BindingsDetailsComponent } from './bindings-details/bindings-details.component';
import { ClothingDetailsComponent } from './clothing-details/clothing-details.component';
import { AccessoriesDetailsComponent } from './accessories-details/accessories-details.component';



@NgModule({
  declarations: [
    AllProductsComponent,
    SnowboardsComponent,
    BootsComponent,
    BindingsComponent,
    AccessoriesComponent,
    ClothingComponent,
    SnowboardDetailsComponent,
    BootsDetailsComponent,
    BindingsDetailsComponent,
    ClothingDetailsComponent,
    AccessoriesDetailsComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
  ],

})
export class ProductsModule { }
