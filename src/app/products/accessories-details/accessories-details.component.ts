import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { IProducts } from 'src/app/shared/interfaces';
import { ProductsService } from 'src/app/services/products.service';




@Component({
    selector: 'app-accessories-details',
    templateUrl: './accessories-details.component.html',
    styleUrls: ['./accessories-details.component.css']
})
export class AccessoriesDetailsComponent {
    id: string = '';
    currentProduct: IProducts[] | any = [];
    isLoading: boolean = true;

    constructor(private activeRoute: ActivatedRoute, private productsService: ProductsService, private _location: Location) {
        console.log(this.activeRoute.snapshot.url);

        this.id = Object.values(this.activeRoute.snapshot.params)[0];
        console.log(this.id);

    }

    goBack() {
        this._location.back();
    }


    ngOnInit(): void {
        this.productsService.getSingleProduct('accessories', this.id).subscribe({
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
