import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { OrderService } from '../order.service';
import { Order } from '../models/order';
import { ShoppingCart } from '../models/shopping-cart';
import { ReportService } from '../report.service';
import { StockService } from '../stock.service';

@Component({  
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  @Input('cart') cart: ShoppingCart;
  shipping = {};
  userSubscription: Subscription;
  userId: string;
  stocks: any = {};

  
  constructor(
    private router: Router,
    private authService: AuthService,
    private orderService: OrderService,
    private reportService: ReportService,
    private stockService: StockService) {

    }


  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }

  async placeOrder(){

    var status = {
      name: {
        name: "Abhay sahu",
      },
      phone: {
        name: "9617625945",
      },
      order:{
        name: "Order is receive at shop",
      },
      delivery:{
        name: "Oreder is picked up",
      },
      leave:{
        name: "leave from Shop",
      },
      process:{
        name: "On The Way",
      },
      city:{
        name: "In Your City",
      },
      receive:{
        name: "Order is delivered",
      }
    };


      // status["name"] = "Abhay sahu";
      // status["phone"] = "9617625945";
      // status["order"] = "Order receive";
      // status["delivery"] = "Delivery to boy";
      // status["leave"] = "leave from Shop";
      // status["process"] = "On The Way"; 
      // status["city"] = "In Your City";
      // status["receive"] = "Order is receive";

    let order = new Order(this.userId, this.shipping, this.cart, status);
    console.log(order)

    let name = order.shipping.name;
    let date = order.dataPlaced

      for(let item of order.items )
        {
          let pusheditems = {};

          console.log(item)

          if(item.product.code)
          {
            console.log("yes")
          }

          else
          {
            console.log("no")
          }


              this.stockService.get(item.product.code).take(1).subscribe(stocks => {
              this.stocks = stocks

              this.stocks.stock = this.stocks.stock - item.quantity
              this.stockService.update(item.product.code, stocks)

              pusheditems["code"] = item.product.code;
              pusheditems["name"] = name;
              pusheditems["date"] = date
              pusheditems["quantity"] = item.quantity;
              pusheditems["purchasePrice"] = this.stocks.price
              pusheditems["price"] = item.product.price;
              pusheditems["totalPrice"] = item.totalPrice;

              this.reportService.create(pusheditems,item.product.code);

            })
        }


    let result = await this.orderService.placeOrder(order);
    this.router.navigate(['/order-success', result.key])
  }
}
