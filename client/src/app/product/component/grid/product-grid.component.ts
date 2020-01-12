import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { GridApi, ColumnApi } from 'ag-grid-community';
import { Product } from '../../models/product';

import * as moment from 'moment';

@Component({
  selector: 'product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css'],
  providers: [ProductService]
})
export class ProductComponent {

 
  private api:GridApi;
  private columnApi: ColumnApi;

  public rowData: Product[];


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


  constructor(private serv: ProductService) {
   }

  ngOnInit() {
    this.serv.getProducts().subscribe(
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
  public productBeingEdited: Product = new Product();
  onChanged(increased:boolean){
    this.editInProc = !increased
   }
  change():void{
    const products = this.api.getSelectedRows()
    if(products.length > 0){
      this.productBeingEdited = <Product>products[0];
      this.editInProc = true;
    }
  }

  onProductSaved(athleteToSave: Product) {
    this.productBeingEdited = new Product();
    this.editInProc = false;
    this.serv.getProducts().subscribe(
      res => this.rowData = res,
      err => console.log(err)
    );
  }
}
