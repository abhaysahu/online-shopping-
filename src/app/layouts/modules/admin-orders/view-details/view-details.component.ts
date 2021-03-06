import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { OrderService } from '../../../../shares/services/order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppUser } from '../../../../shares/models/app-user';
import { AuthService } from '../../../../shares/services/auth.service';
import { OrderCart } from 'src/app/shares/models/order-cart';



@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {


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

        
        for(let item of orders.items)
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
