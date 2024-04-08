import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories.component';
import { MarvelComponent } from './marvel/marvel.component';
import { DcComponent } from './dc/dc.component';
import { HarryPotterComponent } from './harry-potter/harry-potter.component';
import { StarWarsComponent } from './star-wars/star-wars.component';
import { SignoreDegliAnelliComponent } from './signore-degli-anelli/signore-degli-anelli.component';

const routes: Routes = [
  { path: '', component: CategoriesComponent },
  { path: 'marvel', component: MarvelComponent },
  { path: 'dc', component: DcComponent },
  { path: 'harry-potter', component: HarryPotterComponent },
  { path: 'star-wars', component: StarWarsComponent },
  { path: 'signore-degli-anelli', component: SignoreDegliAnelliComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
