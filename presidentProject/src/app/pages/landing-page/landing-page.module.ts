import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { ProductCardComponent } from './product-card/product-card.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule
  ]
})
export class LandingPageModule { }
