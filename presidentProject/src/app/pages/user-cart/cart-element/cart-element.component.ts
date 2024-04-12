import { Component, Input } from '@angular/core';
import { iProduct } from '../../../models/product';
import { UserCartService } from '../user-cart.service';


@Component({
  selector: 'app-cart-element',
  templateUrl: './cart-element.component.html',
  styleUrl: './cart-element.component.scss'
})
export class CartElementComponent {

  @Input() product!: iProduct

  constructor(private userSvc: UserCartService){}

  removeFromCart(product: iProduct){
    this.userSvc.removeItem(product)
  }

}
