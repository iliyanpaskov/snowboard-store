import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { OrdersService } from 'src/app/services/orders.service';
import { ProductsService } from 'src/app/services/products.service';
import { IProducts } from 'src/app/shared/interfaces';

@Component({
    selector: 'app-clothing',
    templateUrl: './clothing.component.html',
    styleUrls: ['./clothing.component.css']
})
export class ClothingComponent implements OnInit {

    constructor(private productsServices: ProductsService, private auth: AuthService, private cart: OrdersService, private toastr: ToastrService) { }

    clothing: IProducts[] | any = [];
    isLoggedIn = this.auth.isLoggedIn;
    isLoading: boolean = true;


    cartAddHandler(objectId: string, image: string, brand: string, model: string, price: string | number,): void {
        this.cart.addToCart({ objectId, image, brand, model, price })
    }

    ngOnInit(): void {
        this.productsServices.getProducts('clothing').subscribe({
            next: (data: IProducts[]): void => {
                this.clothing = Object.values(data)[0];
                this.isLoading = false;
            },
            error: (err) => {
                this.toastr.show(`Please try again later! 🥺`)
            }
        })
    }
}