import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCartComponent } from './user-cart.component';
import { RiepilogoComponent } from './riepilogo/riepilogo.component';

const routes: Routes = [{ path: '', component: UserCartComponent },
{ path: 'riepilogo', component: RiepilogoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserCartRoutingModule { }
