import { NgModule, ErrorHandler } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './service/auth.guard';

import { ProductComponent } from './product/component/grid/product-grid.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './service/login/login.component';
import { ShopComponent } from './shop/component/shop.component';
import { DiscountGridComponent } from './discount/component/grid/discount-grid.component';

const routes: Routes = [ 
  { path: 'shop', component: ShopComponent, canActivate: [AuthGuard] },
  { path: 'product', component: ProductComponent, canActivate: [AuthGuard] },
  { path: 'discount', component: DiscountGridComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: '',component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
