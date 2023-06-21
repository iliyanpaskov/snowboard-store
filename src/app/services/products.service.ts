import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IProducts } from '../shared/interfaces';

const apiURL = environment.apiURL;
const headers = {
  'X-Parse-Application-Id': environment.applicationId,
  'X-Parse-REST-API-Key': environment.apiKey,
  'X-Parse-Revocable-Session': environment.session,
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor(private http: HttpClient) { }

  getProducts(productsGroupe: string) {
    const url: string = `${apiURL}/classes/${productsGroupe}`;
    const data = this.http.get<IProducts[]>(url, {
      headers: headers,
    })
    return data;
  }

  getSingleProduct(productsGroupe: string, id: string | number) {
    const url: string = `${apiURL}/classes/${productsGroupe}/${id}`;
    const data = this.http.get<IProducts[]>(url, {
      headers: headers,
    })
    return data;
  }
}
