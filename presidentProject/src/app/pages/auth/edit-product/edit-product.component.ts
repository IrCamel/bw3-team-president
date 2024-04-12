import { Component } from '@angular/core';
import { iProduct } from '../../../models/product';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss'
})
export class EditProductComponent {

  product!: iProduct

  constructor(private route: ActivatedRoute, private productSvc: ProductService){
    this.route.params.subscribe(params => {
      let productId = params['id'];
      productSvc.getProductById(productId).subscribe(product => this.product = product)
    });
  }





}
