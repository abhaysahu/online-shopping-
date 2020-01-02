import { Component, OnInit, Input } from '@angular/core';
import { OrderCart } from '../models/order-cart';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-admin-view-details',
  templateUrl: './admin-view-details.component.html',
  styleUrls: ['./admin-view-details.component.css']
})
export class AdminViewDetailsComponent implements OnInit {

  @Input('cart') cart: OrderCart;

  orders: any[];
  order$;
  SumOfQuantity=0;
  SumOfPrice=0;
  orderId;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private db: AngularFireDatabase,
    private orderService: OrderService,) { 

      this.orderId = route.snapshot.paramMap.get('id');
      this.order$ = orderService.get(this.orderId);
     

      orderService.get(this.orderId).subscribe(orders => {
        this.orders = orders

        console.log(orders.items)

        
        for(let item of orders.items )
        {
          this.SumOfQuantity = this.SumOfQuantity + item.quantity
          this.SumOfPrice = this.SumOfPrice + item.totalPrice
        }
      })    
    }

  ngOnInit() {
  }

}
