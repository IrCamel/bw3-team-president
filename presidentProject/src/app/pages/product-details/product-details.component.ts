import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { iProduct } from '../../models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productId!: number;
  productArr: iProduct[] = [];

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = +params['id'];
      this.loadProductDetails();
    });
  }

  loadProductDetails() {
    this.productService.getProductById(this.productId).subscribe(
      (product: iProduct) => {
        this.productArr = [product];
      });
  }

  deleteProduct(id:number){
    this.productService.deleteProduct(id).subscribe(() => this.router.navigate(['']))
  }
}
