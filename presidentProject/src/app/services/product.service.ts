import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { iProduct } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productUrl = environment.productUrl

  productArr: iProduct[]=[]


  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<iProduct[]>(this.productUrl)
  }

  getProductById(id: number): Observable<iProduct> {
    const url = `${this.productUrl}/${id}`;
    return this.http.get<iProduct>(url);
  }
}
