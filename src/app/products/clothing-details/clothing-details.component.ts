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

    id: string = '';
    currentProduct: IProducts[] | any = [];
    isLoading: boolean = true;

    constructor(private activeRoute: ActivatedRoute, private productsService: ProductsService, private _location: Location) {
        this.id = Object.values(this.activeRoute.snapshot.params)[0];
    }

    goBack() {
        this._location.back();
    }


    ngOnInit(): void {
        this.productsService.getSingleProduct('clothing', this.id).subscribe({
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
