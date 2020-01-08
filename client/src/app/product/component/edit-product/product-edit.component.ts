import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  @Input() product: Product;
  @Output() onProductSaved = new EventEmitter<Product>();
  constructor(private serv: ProductService){  }

  ngOnInit() { console.log(this.product); }

  @Output() onChanged = new EventEmitter<boolean>();

  save():void{  
    let response = this.product.id ? this.serv.updateProduct(this.product):this.serv.insertProduct(this.product);
    response.subscribe(
        res => {
          this.onProductSaved.emit(this.product);
        },
        err=> {
          console.log(err);
          this.onProductSaved.emit(null);
        });
  }
  cancel():void{
    this.onProductSaved.emit(null);
  }

}
