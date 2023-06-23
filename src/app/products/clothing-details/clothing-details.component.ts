import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { IProducts } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-clothing-details',
  templateUrl: './clothing-details.component.html',
  styleUrls: ['./clothing-details.component.css']
})
export class ClothingDetailsComponent {
  id: any = null;
  currentProduct: IProducts[] | any = [];

  constructor(private activeRoute: ActivatedRoute, private productsService: ProductsService, private _location: Location) {
      this.id = this.activeRoute.snapshot.params;
  }

  goBack() {
      this._location.back();
  }


  ngOnInit(): void {
      this.productsService.getSingleProduct('clothing', this.id.id).subscribe({
          next: (data: IProducts[]): void => {
              this.currentProduct = data
          },
          error: (err) => {
              console.log(err);
          }
      })



  }
}