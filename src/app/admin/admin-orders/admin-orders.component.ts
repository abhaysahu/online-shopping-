import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrderService } from 'src/app/order.service';
import { Subscription } from 'rxjs';
import { Order } from 'src/app/models/order';
import { DataTableResource } from 'angular5-data-table';



@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit, OnDestroy {
 orders: Order[];
 filteredOrders: any[];
 subscription: Subscription;
 tableResource: DataTableResource<Order>;
 items: Order[] =[];
 itemCount: number;

  constructor(private orderService: OrderService) { 
    this.subscription = orderService.getOrders()
    .subscribe(orders => {
      this.filteredOrders = this.orders = orders;
      this.initializeTable(orders);
    });
  }

  private initializeTable(orders: Order[])
  {
    this.tableResource = new DataTableResource(orders);
      this.tableResource.query({ offset: 0})
        .then(items => this.items = items);
      this.tableResource.count()
        .then(count => this.itemCount = count);
        

  }

  reloadItems(params)
  {
    if(!this.tableResource) return;

    this.tableResource.query(params)
      .then(items => this.items = items);

  }

  filter(query: string){
    this.filteredOrders = (query) ?
      this.orders.filter(o => o.shipping.name.toLowerCase().includes(query.toLowerCase())) :
      this.orders;
      this.initializeTable(this.filteredOrders);

  }

 
  ngOnDestroy() {
    this.subscription.unsubscribe();

  }

  ngOnInit() {
  }
 
}
