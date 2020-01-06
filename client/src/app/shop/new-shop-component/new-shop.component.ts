import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Shop } from '../models/shop'
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-new-shop',
  templateUrl: './new-shop.component.html',
  styleUrls: ['./new-shop.component.css'],
  providers: [ShopService]
})
export class NewShopComponent implements OnInit {
  public shop: Shop;

  constructor(private serv: ShopService) 
  {
    this.shop = new Shop();
  }

  ngOnInit() {
  }
  @Output() onChanged = new EventEmitter<boolean>();

  save():void{
    console.log(this.shop);
    this.serv.addNewShop(this.shop)
      .subscribe(
        res => {
          console.log(res);
          this.onChanged.emit(true);
        },
        err=> {
          console.log(err);
          this.onChanged.emit(true);
        });
  }
  cancel():void{
    this.onChanged.emit(true);
  }
}
