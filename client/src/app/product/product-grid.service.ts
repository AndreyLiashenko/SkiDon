import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Product} from './product';
    
@Injectable()
export class ProductService{
    
    private url = "https://skidon-web-app.azurewebsites.net/api/product";
    constructor(private http: HttpClient){ }
       
    getProduct(){
        return this.http.get(this.url);
    }
}