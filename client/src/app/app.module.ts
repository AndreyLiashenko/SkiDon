import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { JwtModule } from "@auth0/angular-jwt";
import { AuthService } from './service/auth.service';
import { AuthGuard } from './service/auth.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './shared/main-menu.component';
import { ProductComponent } from './product/product-grid.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './service/login/login.component';

export function tokenGetter() {
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    ProductComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
     JwtModule
    // .forRoot({
    //   config: {
    //     tokenGetter: tokenGetter,
    //     whitelistedDomains: ['https://skidon-web-app.azurewebsites.net'],
    //     blacklistedRoutes: ['https://skidon-web-app.azurewebsites.net/api/login']
    //   }
    // })
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
