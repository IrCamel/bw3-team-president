import { Component } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { iProduct } from '../../../models/product';
import { UserCartService } from '../../user-cart/user-cart.service';

@Component({
  selector: 'app-signore-degli-anelli',
  templateUrl: './signore-degli-anelli.component.html',
  styleUrl: './signore-degli-anelli.component.scss'
})
export class SignoreDegliAnelliComponent {
  lotProducts: iProduct[] = [];

  constructor(private categoriesService: CategoriesService,private usercartSvc: UserCartService) { }

  ngOnInit(): void {
    this.categoriesService.getProductsByCategory('Il Signore degli Anelli').subscribe(products => {
      this.lotProducts = products;
    });
  }
  addToCart(product: iProduct){
    this.usercartSvc.addToCart(product)
  }
}
