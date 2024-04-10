import { Component, Input } from '@angular/core';
import { iProduct } from '../../../models/product';
import { UserCartService } from '../../user-cart/user-cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  @Input() product!: iProduct

  constructor(private usercartSvc: UserCartService){}

  addToCart(product: iProduct){
    this.usercartSvc.addToCart(product)
  }
}
