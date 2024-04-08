import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { iProduct } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  productArr: iProduct[]=[]

  constructor(private http:HttpClient, private prodSvc:ProductService){
    this.prodSvc.getAll()
    .subscribe(product => {
      this.productArr = product
    })
  }


}
