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

    id: string = '';
    currentProduct: IProducts[] | any = [];
    isLoading:boolean = true; 


    constructor(private activeRoute: ActivatedRoute, private productsService: ProductsService, private _location: Location) {
        this.id = Object.values(this.activeRoute.snapshot.params)[0];
    }

    goBack(): void {
        this._location.back();
    }


    ngOnInit(): void {
        this.productsService.getSingleProduct('snowboards', this.id).subscribe({
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
