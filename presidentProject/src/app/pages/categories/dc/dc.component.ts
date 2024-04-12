import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { iProduct } from '../../../models/product';
import { UserCartService } from '../../user-cart/user-cart.service';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.scss']
})
export class DcComponent implements OnInit {
  dcProducts: iProduct[] = [];

  constructor(private categoriesService: CategoriesService,private usercartSvc: UserCartService) { }

  ngOnInit(): void {
    this.categoriesService.getProductsByCategory('DC').subscribe(products => {
      this.dcProducts = products;
    });
  }

  addToCart(product: iProduct){
    this.usercartSvc.addToCart(product)
  }
}
