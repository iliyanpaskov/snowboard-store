import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProductsService } from 'src/app/services/products.service';
import { IProducts } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit {

  constructor(private productsServices: ProductsService, private auth: AuthService) { }

  bindings: IProducts[] | any = [];
  isLoggedIn = this.auth.isLoggedIn;

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


