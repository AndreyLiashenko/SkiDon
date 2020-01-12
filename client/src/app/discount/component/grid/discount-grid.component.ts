import { Component, OnInit } from '@angular/core';
import { DiscountService } from '../../discount.service';
import { GridApi, ColumnApi } from 'ag-grid-community';
import { Discount } from '../../models/discount';

import * as moment from 'moment';

@Component({
  selector: 'app-discount-grid',
  templateUrl: './discount-grid.component.html',
  styleUrls: ['./discount-grid.component.css'],
  providers: [DiscountService]
})
export class DiscountGridComponent implements OnInit {

 
  private api:GridApi;
  private columnApi: ColumnApi;

  public rowData: Discount[];


  columnDefs = [
    { 
      headerName: 'Price', 
      field: 'price', 
      sortable: true, 
      filter: true, 
      checkboxSelection: true
    },
    { 
      headerName: 'Dicription', 
      field: 'discription', 
      sortable: true, 
      filter: true
    }
  ];


  constructor(private serv: DiscountService) {
   }

  ngOnInit() {
    this.serv.getDiscount().subscribe(
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
  public discountBeingEdited: Discount = new Discount();
  onChanged(increased:boolean){
    this.editInProc = !increased
   }
  change():void{
    const products = this.api.getSelectedRows()
    if(products.length > 0){
      this.discountBeingEdited = <Discount>products[0];
      this.editInProc = true;
    }
  }

  onDiscountSaved(athleteToSave: Discount) {
    this.discountBeingEdited = new Discount();
    this.editInProc = false;
    this.serv.getDiscount().subscribe(
      res => this.rowData = res,
      err => console.log(err)
    );
  }
}
