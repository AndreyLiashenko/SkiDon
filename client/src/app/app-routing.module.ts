import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './service/auth.guard';

import { ProductComponent } from './product/product-grid.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './service/login/login.component';


const routes: Routes = [ 
  { path: 'product', component: ProductComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '',component: HomeComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
