import { Component, OnInit } from '@angular/core';
import { Shop } from '../models/shop'
import { ShopService } from '../shop.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  isAddNew = false;

  columnDefs = [
    { headerName: 'Name', field: 'make', sortable: true, filter: true, checkboxSelection: true }
  ];
  rowData: any ;
  constructor(private serv: ShopService) {
   }

  ngOnInit() {
    this.rowData = this.serv.getShops();
    this.rowData =[
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }
    ]
  }
  onChanged(increased:boolean){
   this.isAddNew = !increased
  }
}
