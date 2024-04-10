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
  { path: 'info',
    loadChildren: () => import('./pages/info/info.module').then(m => m.InfoModule)
  },
  { path: '**',
    loadChildren: () => import('./pages/error404/error404.module').then(m => m.Error404Module)
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
  { path: 'info',
    loadChildren: () => import('./pages/info/info.module').then(m => m.InfoModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
