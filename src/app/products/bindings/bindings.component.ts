import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { OrdersService } from 'src/app/services/orders.service';
import { ProductsService } from 'src/app/services/products.service';
import { IProducts } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit {

  constructor(private cart:OrdersService,private productsServices: ProductsService, private auth: AuthService) { }

  bindings: IProducts[] | any = [];
  isLoggedIn = this.auth.isLoggedIn;

  cartAddHandler(objectId: string, image: string, brand: string, model: string, price: string | number,) {
    this.cart.addToCart({ objectId, image, brand, model, price })
  }

  ngOnInit(): void {
    this.productsServices.getProducts('bindings').subscribe({
      next: (data:IProducts[]): void => {
        this.bindings = Object.values(data)[0]
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}


