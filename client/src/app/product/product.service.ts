import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = "https://localhost:44330/api/product";

  constructor(private http: HttpClient){ }
     
  insertProduct(product: Product){
    return this.http.post(this.url ,product);
  }
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.url);
  }
  updateProduct(product: Product):Observable<Product>{
      return this.http.put<Product>(this.url + '/' + product.id, product);
  }
  delete(product: Product) {
    return this.http.delete(this.url + '/' + product.id);
  }
}
