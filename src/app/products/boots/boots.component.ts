import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { OrdersService } from 'src/app/services/orders.service';
import { ProductsService } from 'src/app/services/products.service';
import { IProducts } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-boots',
  templateUrl: './boots.component.html',
  styleUrls: ['./boots.component.css']
})
export class BootsComponent implements OnInit {

  constructor (private cart:OrdersService,private productsServices: ProductsService, private auth:AuthService, private toastr:ToastrService) {}

  boots: IProducts | any =[];
  isLoggedIn = this.auth.isLoggedIn;
  isLoading:boolean = true; 

  cartAddHandler(objectId: string, image: string, brand: string, model: string, price: string | number,): void {
    this.cart.addToCart({ objectId, image, brand, model, price })
  }

  ngOnInit(): void {
    this.productsServices.getProducts('boots').subscribe({
      next: (data:IProducts[]): void => {
        this.boots = Object.values(data)[0];
        this.isLoading= false;      
      },
      error: (err) => {
        this.toastr.show(`Please try again later! 🥺`)
      }
    })
  }
}
