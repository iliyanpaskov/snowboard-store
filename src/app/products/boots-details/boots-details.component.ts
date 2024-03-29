import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { IProducts } from 'src/app/shared/interfaces';

@Component({
    selector: 'app-boots-details',
    templateUrl: './boots-details.component.html',
    styleUrls: ['./boots-details.component.css']
})

export class BootsDetailsComponent implements OnInit {

    id: string = '';
    currentProduct: IProducts[] | any = [];
  isLoading:boolean = true; 

    constructor(private productsService: ProductsService, private activeRoute: ActivatedRoute, private _location: Location) {
        this.id = Object.values(this.activeRoute.snapshot.params)[0];
    }

    goBack() {
        this._location.back()
    }

    ngOnInit(): void {
        this.productsService.getSingleProduct('boots', this.id).subscribe({
            next: (data: IProducts[]): void => {
                this.currentProduct = data;
                this.isLoading = false;
            },
            error: (err) => {
                console.log(err);
            }
        })
    }

}
