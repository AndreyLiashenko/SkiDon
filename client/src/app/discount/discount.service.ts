import { Injectable } from '@angular/core';
import { Discount } from './models/discount';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  private url = "https://skidon-web-app.azurewebsites.net/api/discount";

  constructor(private http: HttpClient){ }
     
  insertDiscount(discount: Discount){
    return this.http.post(this.url ,prodiscountduct);
  }
  getDiscount(): Observable<Discount[]>{
    return this.http.get<Discount[]>(this.url);
  }
  updateDiscount(discount: Discount):Observable<Discount>{
      return this.http.put<Discount>(this.url + '/' + discount.id, discount);
  }
  delete(discount: Discount) {
    return this.http.delete(this.url + '/' + discount.id);
  }
}
