import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
  loadChildren: () => import('./pages/landing-page/landing-page.module').then(m => m.LandingPageModule)
  },
  { path: 'auth',
  loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  { path: 'productDetails',
  loadChildren: () => import('./pages/product-details/product-details.module').then(m => m.ProductDetailsModule)
  },
  { path: 'categories',
  loadChildren: () => import('./pages/categories/categories.module').then(m => m.CategoriesModule)
  },
  { path: 'userCart',
  loadChildren: () => import('./pages/user-cart/user-cart.module').then(m => m.UserCartModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
