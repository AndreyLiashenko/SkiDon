import {TemplateRef, ViewChild} from '@angular/core';
import {Component, OnInit} from '@angular/core';
import {Product} from './product';
import {ProductService} from './product-grid.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'test',
  templateUrl: './product-grid.html',
  providers: [ProductService]
})
export class ProductComponent {
    //типы шаблонов
    // @ViewChild('readOnlyTemplate', {static: false}) readOnlyTemplate: TemplateRef<any>;
    // @ViewChild('editTemplate', {static: false}) editTemplate: TemplateRef<any>;

  editedProduct: Product;
  products: Array<Product>;
  isNewRecord: boolean;
  statusMessage: string;
     
  constructor(private serv: ProductService) {
      this.products = new Array<Product>();
  }
     
  ngOnInit() {
      this.loadProducts();
  }
     
  //загрузка пользователей
  private loadProducts() {
      this.serv.getProduct().subscribe((data: Product[]) => {
              this.products = data; 
          });
  }    
  // загружаем один из двух шаблонов
  // loadTemplate(product: Product) {
  //     if (this.editedProduct && this.editedProduct.Id == product.Id) {
  //         return this.editTemplate;
  //     } else {
  //         return this.readOnlyTemplate;
  //     }
  // }
}
