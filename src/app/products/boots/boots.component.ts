import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProductsService } from 'src/app/services/products.service';
import { IProducts } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-boots',
  templateUrl: './boots.component.html',
  styleUrls: ['./boots.component.css']
})
export class BootsComponent implements OnInit {

  constructor (private productsServices: ProductsService, private auth:AuthService) {}

  boots: IProducts | any =[];
  isLoggedIn = this.auth.isLoggedIn;


  ngOnInit(): void {
    this.productsServices.getProducts('boots').subscribe({
      next: (data) => {
        this.boots = Object.values(data)[0]
        console.log(this.boots);
        
      },
      error: (err) => {
        console.log(err);
        
      }
    })
  }
}
