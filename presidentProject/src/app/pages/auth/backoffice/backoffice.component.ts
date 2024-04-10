import { Component } from '@angular/core';
import { iProduct } from '../../../models/product';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';
import { ProductService } from '../../../services/product.service';


@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrl: './backoffice.component.scss'
})
export class BackofficeComponent {

  productUrl = environment.productUrl

  newProduct:Partial<iProduct> = {}

  constructor(private productSvc: ProductService, private http:HttpClient ){}

  createProduct(){
    this.productSvc.createProduct(this.newProduct)
    .subscribe(() => {
      this.newProduct = {}
    })
  }
}
