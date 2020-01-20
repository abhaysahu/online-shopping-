import { Component, OnInit, Input } from '@angular/core';
import { OrderCart } from '../shares/models/order-cart';
import { AppUser } from '../shares/models/app-user';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../shares/services/auth.service';
import { OrderService } from '../shares/services/order.service';

@Component({
  selector: 'app-user-order-details',
  templateUrl: './user-order-details.component.html',
  styleUrls: ['./user-order-details.component.css']
})
export class UserOrderDetailsComponent implements OnInit {

  @Input('cart') cart: OrderCart;


  product:any={};
  stock: any={};
  message;
  messageClass;

  orders: any[];
  order$;
  SumOfQuantity=0;
  SumOfPrice=0;
  orderId;
  appUser: AppUser;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private db: AngularFireDatabase,
    private auth: AuthService, 

    private orderService: OrderService,) { 

      this.orderId = route.snapshot.paramMap.get('id');
      this.order$ = orderService.get(this.orderId);
     

      orderService.get(this.orderId).subscribe(orders => {
        this.orders = orders

        console.log(orders.items)
        this.SumOfQuantity=0;
        this.SumOfPrice=0;

        
        for(let item of orders.items )
        {
          this.SumOfQuantity = this.SumOfQuantity + item.quantity
          this.SumOfPrice = this.SumOfPrice + item.totalPrice
        }
      })    
    }


    save(product){

      console.log(product)

      this.orderService.updateRate(product,this.orderId).then(data=>{
        console.log(data)
      })
      

      // this.shoppingCartService.ManualAddToCart(product).then(data=>{

      //   if(data)
      //   {
      //     this.messageClass = 'alert alert-success';
      //     this.message = "Stock Update Success fully";
      //     product.name = "";
      //     product.weight = "";
      //   }
      //   else
      //   {
      //     this.messageClass = 'alert alert-danger';
      //     this.message = "Invalid"
      //   }

      // })

     
    
    }

  ngOnInit() {

    this.auth.appUser$.subscribe(appUser => {
      this.appUser = appUser
      console.log(this.appUser)

    });
  }

}
