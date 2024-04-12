import { Component } from '@angular/core';
import { iProduct } from '../../../models/product';
import { CategoriesService } from '../categories.service';
import { UserCartService } from '../../user-cart/user-cart.service';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrl: './star-wars.component.scss'
})
export class StarWarsComponent {
  starWarsProducts: iProduct[] = [];

  constructor(private categoriesService: CategoriesService,private usercartSvc: UserCartService) { }

  ngOnInit(): void {
    this.categoriesService.getProductsByCategory('Star Wars').subscribe(products => {
      this.starWarsProducts = products;
    });
  }

  addToCart(product: iProduct){
    this.usercartSvc.addToCart(product)
  }
}
