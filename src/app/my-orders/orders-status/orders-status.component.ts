import { Component, OnInit } from '@angular/core';
import { AppUser } from '../../shares/models/app-user';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../../shares/services/auth.service';
import { OrderService } from '../../shares/services/order.service';
import { CategoryService } from '../../shares/services/category.service';

@Component({
  selector: 'app-orders-status',
  templateUrl: './orders-status.component.html',
  styleUrls: ['./orders-status.component.css']
})
export class OrdersStatusComponent implements OnInit {

  orderId;
  orders: any = {};
  order$;
  categories$;
  categories: any = {} 
  appUser: AppUser;
  product:any={};



  constructor(
    private router: Router,
    private route: ActivatedRoute, 
    private db: AngularFireDatabase,
    private auth: AuthService, 
    private orderService: OrderService,
    private categoryService: CategoryService
  ) {


    this.orderId = route.snapshot.paramMap.get('id');
    this.order$ = orderService.get(this.orderId);



    orderService.get(this.orderId).subscribe(orders => {
      this.orders = orders
      console.log(this.orders)
    })
   }
  



  save(product){
    
    let status = product.category
    
    console.log(status)

    this.orderService.update(status,this.orderId)

  }





  ngOnInit() {

    this.auth.appUser$.subscribe(appUser => {
      this.appUser = appUser
      console.log(this.appUser)

    });
  }

}
