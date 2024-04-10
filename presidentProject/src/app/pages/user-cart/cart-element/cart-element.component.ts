import { Component, Input } from '@angular/core';
import { iProduct } from '../../../models/product';

@Component({
  selector: 'app-cart-element',
  templateUrl: './cart-element.component.html',
  styleUrl: './cart-element.component.scss'
})
export class CartElementComponent {

  @Input() product!: iProduct

}
