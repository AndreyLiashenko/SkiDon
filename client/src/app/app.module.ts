import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { JwtModule } from "@auth0/angular-jwt";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './shared/main-menu.component';
import { ProductComponent } from './product/product-grid.component';
import { LoginComponent } from './account/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { AuthComponent } from './auth/auth/auth.component';

import { AuthGuard } from './auth/quard/auth-guard.service';

export function tokenGetter() {
  return localStorage.getItem("jwt");
}
// определение дочерних маршрутов
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'product', component: ProductComponent },
  { path: 'home', component: HomeComponent },
  { path: 'auth', component: AuthComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    ProductComponent,
    LoginComponent,
    HomeComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:44330"],
        blacklistedRoutes: []
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
