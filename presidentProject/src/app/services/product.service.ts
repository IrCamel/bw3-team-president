import { iProduct } from './../models/product';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
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

  createProduct(productArr:Partial<iProduct>){
    return this.http.post<iProduct>(this.productUrl, productArr)
  }


  getProductById(id: number): Observable<iProduct> {
    const url = `${this.productUrl}/${id}`;
    return this.http.get<iProduct>(url);
  }

  deleteProduct(id: number){
    return this.http.delete(this.productUrl+'/'+id)
  }
}


