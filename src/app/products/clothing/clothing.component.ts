import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProductsService } from 'src/app/services/products.service';
import { IProducts } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css']
})
export class ClothingComponent implements OnInit {

  constructor(private productsServices: ProductsService, private auth: AuthService) { }

  clothing: IProducts[] | any = [];
  isLoggedIn = this.auth.isLoggedIn;

  ngOnInit(): void {
    this.productsServices.getProducts('clothing').subscribe({
      next: (data) => {
        this.clothing = Object.values(data)[0]
      },
      error: (err) => {
        console.log(err);

      }
    })
  }
}