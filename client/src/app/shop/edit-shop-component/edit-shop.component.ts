import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Shop } from '../models/shop'
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-edit-shop',
  templateUrl: './edit-shop.component.html',
  styleUrls: ['./edit-shop.component.css'],
  providers: [ShopService]
})
export class EditShopComponent implements OnInit {
  @Input() shop: Shop;
  @Output() onShopSaved = new EventEmitter<Shop>();
  constructor(private serv: ShopService){  }

  ngOnInit() { console.log(this.shop); }

  @Output() onChanged = new EventEmitter<boolean>();

  save():void{  
    let response = this.shop.id !== null? this.serv.updateShop(this.shop):this.serv.insertShop(this.shop);
    response.subscribe(
        res => {
          this.onShopSaved.emit(this.shop);
        },
        err=> {
          console.log(err);
          this.onShopSaved.emit(null);
        });
  }
  cancel():void{
    this.onShopSaved.emit(null);
  }
}
