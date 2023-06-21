import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SnowboardsComponent } from './snowboards/snowboards.component';
import { BootsComponent } from './boots/boots.component';
import { BindingsComponent } from './bindings/bindings.component';



@NgModule({
  declarations: [
    AllProductsComponent,
    SnowboardsComponent,
    BootsComponent,
    BindingsComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
  ],

})
export class ProductsModule { }
