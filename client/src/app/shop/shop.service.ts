import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shop } from './models/shop';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private url = "https://localhost:44330/api/shop";
  constructor(private http: HttpClient){ }
     
  addNewShop(shop: Shop){
    var body = shop;
    console.log(body);
    return this.http.post(this.url ,body);
  }
  getShops(){
    return this.http.get<Shop>(this.url);
  }
}
