import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { OrdersService } from 'src/app/services/orders.service';
import { ProductsService } from 'src/app/services/products.service';
import { IProducts } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-snowboards',
  templateUrl: './snowboards.component.html',
  styleUrls: ['./snowboards.component.css']
})
export class SnowboardsComponent implements OnInit {
  constructor(private productsServices: ProductsService, private auth: AuthService, private cart: OrdersService) { }

  snowboards: IProducts[] | any = [];
  isLoggedIn = this.auth.isLoggedIn;

  cartAddHandler(objectId: string, image: string, brand: string, model: string, price: string | number,) {
    this.cart.addToCart({ objectId, image, brand, model, price })
  }

  ngOnInit(): void {
    this.productsServices.getProducts('snowboards').subscribe({
      next: (data: IProducts[]): void => {
        this.snowboards = Object.values(data)[0];
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
