import { Component, Input, OnInit,ViewChild, ElementRef } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../shares/services/auth.service';
import { OrderService } from '../shares/services/order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderCart } from '../models/order-cart';
import { Order } from '../models/order';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';



@Component({ 
  selector: 'view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {
 
  
  @Input('cart') cart: OrderCart;

  orders: any[];
  order$;
  SumOfQuantity=0;
  SumOfPrice=0;
  orderId

  constructor( 
    private router: Router,
    private route: ActivatedRoute, 
    private db: AngularFireDatabase,
    private orderService: OrderService) { 

      this.orderId = route.snapshot.paramMap.get('id');
      this.order$ = orderService.get(this.orderId);
     

      orderService.get(this.orderId).subscribe(orders => {
        this.orders = orders

        
        for(let item of orders.items )
        {
          this.SumOfQuantity = this.SumOfQuantity + item.quantity
          this.SumOfPrice = this.SumOfPrice + item.totalPrice
        }
        
        
      })
          
    }


    @ViewChild('content') content: ElementRef;

    public downloadPDF()
    {
      {  
    var data = document.getElementById('content');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 200;    
      var pageHeight = 400;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('MYPdf.pdf'); // Generated PDF   
    });  
  }
    }


    delete()
    {
      if(!confirm('Are you sure yow want to delete this product?')) return;
      
      this.orderService.delete(this.orderId);
      this.router.navigate(['admin/orders']); 
    }


  ngOnInit(){


  }
}
