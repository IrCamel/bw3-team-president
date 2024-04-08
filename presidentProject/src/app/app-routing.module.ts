import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'auth',
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  { path: '',
  loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
