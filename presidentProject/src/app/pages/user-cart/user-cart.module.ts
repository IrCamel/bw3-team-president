import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCartRoutingModule } from './user-cart-routing.module';
import { UserCartComponent } from './user-cart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, NgModel } from '@angular/forms';
import { CartElementComponent } from './cart-element/cart-element.component';
import { RiepilogoComponent } from './riepilogo/riepilogo.component';


@NgModule({
  declarations: [
    UserCartComponent,
    CartElementComponent,
    RiepilogoComponent
  ],
  imports: [
    CommonModule,
    UserCartRoutingModule,
    NgbModule,
    FormsModule
  ]
})
export class UserCartModule { }
