import { Component } from '@angular/core';
import { iProduct } from '../../../models/product';
import { CategoriesService } from '../categories.service';
import { UserCartService } from '../../user-cart/user-cart.service';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrl: './marvel.component.scss'
})
export class MarvelComponent {
  marvelProducts: iProduct[] = [];

  constructor(private categoriesService: CategoriesService,private usercartSvc: UserCartService) { }

  ngOnInit(): void {
    this.categoriesService.getProductsByCategory('Marvel').subscribe(products => {
      this.marvelProducts = products;
    });
  }
  addToCart(product: iProduct){
    this.usercartSvc.addToCart(product)
  }
}
