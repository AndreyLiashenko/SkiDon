import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { Shop } from '../models/shop';
import { GridApi, ColumnApi } from 'ag-grid-community';

import * as moment from 'moment';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
 
  private api:GridApi;
  private columnApi: ColumnApi;

  public rowData: Shop[];


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
      valueFormatter: function (params) {
        return moment(params.value).format('MM/DD/YYYY HH:mm');
      }
    }
  ];


  constructor(private serv: ShopService) {
   }

  ngOnInit() {
    this.serv.getShops().subscribe(
      res => this.rowData = res,
      err => console.log(err)
    );
  }

  OnGridReady(params) {
    this.api=params.api;
    this.columnApi = params.columnApi;
  }

  rowsSelected() {
    return this.api && this.api.getSelectedRows().length > 0;
  }
  deleteSelectedRows() {
    const selectRows = this.api.getSelectedRows();
    if(selectRows.length > 0){
      this.serv.delete(selectRows[0])
        .subscribe(
          res => this.api.updateRowData( { remove: selectRows } ),
          err => console.log(err)
        );
    }    
  }

  public editInProc = false;
  public shopBeingEdited: Shop = new Shop();
  onChanged(increased:boolean){
    this.editInProc = !increased
   }
  change():void{
    const shops = this.api.getSelectedRows()
    if(shops.length > 0){
      this.shopBeingEdited = <Shop>shops[0];
      this.editInProc = true;
    }
  }

  onShopSaved(athleteToSave: Shop) {
    this.shopBeingEdited = new Shop();
    this.editInProc = false;
    this.serv.getShops().subscribe(
      res => this.rowData = res,
      err => console.log(err)
    );
  }
}
