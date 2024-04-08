import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { MarvelComponent } from './marvel/marvel.component';
import { DcComponent } from './dc/dc.component';
import { HarryPotterComponent } from './harry-potter/harry-potter.component';
import { StarWarsComponent } from './star-wars/star-wars.component';
import { SignoreDegliAnelliComponent } from './signore-degli-anelli/signore-degli-anelli.component';


@NgModule({
  declarations: [
    CategoriesComponent,
    MarvelComponent,
    DcComponent,
    HarryPotterComponent,
    StarWarsComponent,
    SignoreDegliAnelliComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
