import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCartRoutingModule } from './user-cart-routing.module';
import { UserCartComponent } from './user-cart.component';


@NgModule({
  declarations: [
    UserCartComponent
  ],
  imports: [
    CommonModule,
    UserCartRoutingModule
  ]
})
export class UserCartModule { }
