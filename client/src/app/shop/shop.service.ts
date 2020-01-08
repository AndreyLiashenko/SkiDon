import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shop } from './models/shop';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private url = "https://localhost:44330/api/shop";

  constructor(private http: HttpClient){ }
     
  insertShop(shop: Shop){
    return this.http.post(this.url ,shop);
  }
  getShops(): Observable<Shop[]>{
    return this.http.get<Shop[]>(this.url);
  }
  updateShop(shop: Shop):Observable<Shop>{
    return this.http.put<Shop>(this.url + '/' + shop.id, shop);
  }
  delete(shop: Shop) {
    return this.http.delete(this.url + '/' + shop.id);
  }
}
