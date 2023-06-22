import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProductsService } from 'src/app/services/products.service';
import { IProducts } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-snowboards',
  templateUrl: './snowboards.component.html',
  styleUrls: ['./snowboards.component.css']
})
export class SnowboardsComponent implements OnInit {
  constructor(private productsServices: ProductsService,private auth:AuthService) { }

  snowboards:IProducts[] | any=[];
  isLoggedIn = this.auth.isLoggedIn;

  ngOnInit(): void {
    this.productsServices.getProducts('snowboards').subscribe({
      next: (data:IProducts[]): void => {
        this.snowboards = Object.values(data)[0];
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
