import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shares/services/order.service';
import { AngularFireDatabase } from 'angularfire2/database/database';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../shares/services/auth.service';
import { AppUser } from '../shares/models/app-user';
import { CategoryService } from '../shares/services/category.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent implements OnInit {

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
