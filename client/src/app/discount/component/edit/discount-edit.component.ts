import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Discount } from '../../models/discount';
import { DiscountService } from '../../discount.service';

@Component({
  selector: 'app-discount-edit',
  templateUrl: './discount-edit.component.html',
  styleUrls: ['./discount-edit.component.css']
})
export class DiscountEditComponent implements OnInit {

  @Input() discount: Discount;
  @Output() onDiscountSaved = new EventEmitter<Discount>();
  constructor(private serv: DiscountService){  }

  ngOnInit() { console.log(this.discount); }

  @Output() onChanged = new EventEmitter<boolean>();

  save():void{  
    let response = this.discount.id ? this.serv.updateDiscount(this.discount):this.serv.insertDiscount(this.discount);
    response.subscribe(
        res => {
          this.onDiscountSaved.emit(this.discount);
        },
        err=> {
          console.log(err);
          this.onDiscountSaved.emit(null);
        });
  }
  cancel():void{
    this.onDiscountSaved.emit(null);
  }

}
