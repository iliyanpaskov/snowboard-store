import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    isLoading:boolean = true; 


    constructor(private activeRoute: ActivatedRoute, private productsService: ProductsService, private _location: Location) {
        this.id = this.activeRoute.snapshot.params;
    }

    goBack(): void {
        this._location.back();
    }


    ngOnInit(): void {
        this.productsService.getSingleProduct('snowboards', this.id.id).subscribe({
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
