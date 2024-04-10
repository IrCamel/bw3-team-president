import { iProduct } from './../models/product';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

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


}
