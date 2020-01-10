import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderService } from '../../shares/services/order.service';
import { ReportService } from '../../shares/services/report.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { async } from 'q';
import { AsyncPipe } from '@angular/common';
import { Subscription } from 'rxjs';
import { StockService } from '../../shares/services/stock.service';



@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {


  orders: any[];
  sales: any={};
  stocks: any={};
  sale$;
  order$;
  orderId;
  subscription: Subscription;

  

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private orderService: OrderService,
    private reportService: ReportService,
    private db: AngularFireDatabase,
    private stockService: StockService
  ) { 

    this.orderId = route.snapshot.paramMap.get('id');
    console.log(this.orderId)

    // this.orderService.get(this.orderId).subscribe(orders => {
    //   this.orders = orders
    //   let name = orders.shipping.name;

    //   for(let item of orders.items )
    //     {
          
    //       let pusheditems = {};


    //           this.stockService.get(item.product.code).take(1).subscribe(stocks => {
    //           this.stocks = stocks

    //           this.stocks.stock = this.stocks.stock - item.quantity

    //           this.stockService.update(item.product.code, stocks)

              
    //           pusheditems["code"] = item.product.code;
    //           pusheditems["name"] = name;
    //           pusheditems["quantity"] = item.quantity;
    //           pusheditems["purchasePrice"] = this.stocks.price
    //           pusheditems["price"] = item.product.price;
    //           pusheditems["totalPrice"] = item.totalPrice;

    //           this.reportService.create(pusheditems,item.product.code);

   
    //         })
    //     }    
    // });
  }

 ngOnInit() {

      }

}
 