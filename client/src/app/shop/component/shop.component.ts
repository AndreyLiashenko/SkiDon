import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import * as moment from 'moment';
import { Shop } from '../models/shop';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
 
  private gridApi:any;
  private columnApi:any;

  public selectedShop: Shop;
  public isAddNew = false;
  
  columnDefs = [
    { 
      headerName: 'Name', 
      field: 'name', 
      sortable: true, 
      filter: true, 
      checkboxSelection: true 
    },
    { 
      headerName: 'CreateDate', 
      field: 'createdDate', 
      sortable: true, 
      filter: true,
      cellRenderer: (data) => { return moment(data.createdAt).format('MM/DD/YYYY HH:mm') } }
  ];
  rowData: any ;

  constructor(private serv: ShopService) {
   }

  ngOnInit() {
    this.serv.getShops().subscribe(res => {this.rowData = res;console.log(res)}, err => console.log("error:" + err) );
  }
  onChanged(increased:boolean){
   this.isAddNew = !increased
  }
  OnGridReady(params) {
    this.gridApi=params.api;
  }

  delete():void{
    const shops = this.gridApi.getSelectedRows()
    if(shops.length > 0){

    }
  }
  change():void{
    const shops = this.gridApi.getSelectedRows()
    if(shops.length > 0){
      console.log("dasdas" + this.selectedShop);
      console.log(shops[0]);
      this.selectedShop = shops[0] as Shop;
      console.log(this.selectedShop);
      this.isAddNew = true;
    }
  }
}
