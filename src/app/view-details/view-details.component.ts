import { Component, OnInit, Input } from '@angular/core';
import { OrderCart } from '../models/order-cart';
import { AngularFireDatabase } from 'angularfire2/database';
import { OrderService } from '../order.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {


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
