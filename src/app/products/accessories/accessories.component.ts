import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { OrdersService } from 'src/app/services/orders.service';
import { ProductsService } from 'src/app/services/products.service';
import { IProducts } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit{

  constructor (private cart:OrdersService ,private productsServices:ProductsService, private auth:AuthService) {  }

  accessories: IProducts | any = [];
  isLoggedIn = this.auth.isLoggedIn;

  cartAddHandler(objectId: string, image: string, brand: string, model: string, price: string | number,) {
    this.cart.addToCart({ objectId, image, brand, model, price })
  }

  ngOnInit(): void {
    this.productsServices.getProducts('accessories').subscribe({
      next: (data:IProducts[]): void => {
        this.accessories = Object.values(data)[0];
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
