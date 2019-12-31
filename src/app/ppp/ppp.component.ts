import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { StockService } from '../stock.service';

@Component({
  selector: 'ppp',
  templateUrl: './ppp.component.html',
  styleUrls: ['./ppp.component.css']
})
export class PppComponent implements OnInit {

  product:any={};
  stock: any={};
  message;
  messageClass;

  constructor(private stockService: StockService) {

   }

   save(product){
     console.log(product)
     this.stockService.get(product.code).take(1).subscribe(stock => {
       this.stock = stock

       this.stock.stock = this.stock.stock + product.stock

       if(this.stock.code)
       {
          this.messageClass = 'alert alert-success';
          this.message = "Stock Update Success fully"
          this.stockService.update(product.code, stock)
       }
       else 
       {
        this.messageClass = 'alert alert-danger';
        this.message = "Product Code Is Invalid"
       }

     })
     
   }



  ngOnInit() {
  }

}
