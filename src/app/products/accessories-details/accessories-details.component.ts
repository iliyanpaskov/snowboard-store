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
    id: any = null;
    currentProduct: IProducts[] | any = [];

    constructor(private activeRoute: ActivatedRoute, private productsService: ProductsService, private _location: Location) {
        this.id = this.activeRoute.snapshot.params;
    }

    goBack() {
        this._location.back();
    }


    ngOnInit(): void {
        this.productsService.getSingleProduct('accessories', this.id.id).subscribe({
            next: (data: IProducts[]): void => {
                this.currentProduct = data
            },
            error: (err) => {
                console.log(err);
            }
        })
    }
}
