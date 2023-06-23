import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { IProducts } from 'src/app/shared/interfaces';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-bindings-details',
  templateUrl: './bindings-details.component.html',
  styleUrls: ['./bindings-details.component.css']
})
export class BindingsDetailsComponent implements OnInit{


  id: any = null;
  currentProduct: IProducts[] | any = [];

  constructor(private activeRoute: ActivatedRoute, private productsService: ProductsService, private _location: Location) {
      this.id = this.activeRoute.snapshot.params;
  }

  goBack() {
      this._location.back();
  }


  ngOnInit(): void {
      this.productsService.getSingleProduct('bindings', this.id.id).subscribe({
          next: (data: IProducts[]): void => {
              this.currentProduct = data
          },
          error: (err) => {
              console.log(err);
          }
      })

  }
}
