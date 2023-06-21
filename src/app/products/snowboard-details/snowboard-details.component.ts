import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { IProducts } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-snowboard-details',
  templateUrl: './snowboard-details.component.html',
  styleUrls: ['./snowboard-details.component.css']
})
export class SnowboardDetailsComponent implements OnInit {

  id: any = null;
  currentProduct: IProducts[] | any = [];

  constructor(private activeRoute: ActivatedRoute, private productsService: ProductsService) {
    this.id = this.activeRoute.snapshot.params
    console.log(this.id.id);
  }


  ngOnInit(): void {
    this.productsService.getSingleProduct('snowboards', this.id.id).subscribe({
      next: (data: IProducts[]): void => {
        this.currentProduct = data
        console.log(this.currentProduct);
      },
      error: (err) => {
        console.log(err);
      }
    })



  }

}
