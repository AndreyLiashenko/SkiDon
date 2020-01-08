import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';

import { JwtModule } from "@auth0/angular-jwt";
import { AuthService } from './service/auth.service';
import { AuthGuard } from './service/auth.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './shared/main-menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './service/login/login.component';
import { ShopComponent } from './shop/component/shop.component';
import { EditShopComponent } from './shop/edit-shop-component/edit-shop.component';
import { AuthInterceptor } from './service/auth.interceptor';
import { ProductComponent } from './product/component/grid/product-grid.component';
import { ProductEditComponent } from './product/component/edit-product/product-edit.component';

export function tokenGetter() {
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    ProductComponent,
    HomeComponent,
    LoginComponent,
    ShopComponent,
    EditShopComponent,
    ProductComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule
    .forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['https://skidon-web-app.azurewebsites.net'],
        blacklistedRoutes: ['https://skidon-web-app.azurewebsites.net/api/login']
      }
    }),
    AgGridModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
