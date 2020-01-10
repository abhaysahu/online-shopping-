import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReportService } from '../shares/services/report.service';
import { Product } from '../models/product';
import { DataTableResource } from 'angular5-data-table';
import { Subscription } from 'rxjs';
import { StockService } from '../shares/services/stock.service';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.css']
})
export class ReportDetailsComponent implements OnInit {


  stock: any = {};
  filteredProducts: any[];
  subscription: Subscription;
  tableResource: DataTableResource<Product>;
  items: Product[] = [];
  itemCount: number;
  Id;
  Code;
  SumOfQuantity=0;
  SumOfPurchasingPrice=0;
  SumOfSellingPrice=0;
  productCode: string;


   
  constructor(
    private reportService: ReportService,
    private route: ActivatedRoute,) { 


    this.Id = route.snapshot.paramMap.get('id');

    
      this.subscription = this.reportService.getall(this.Id)
    .subscribe(products => {
      this.SumOfQuantity=0;
      this.SumOfPurchasingPrice=0;
      this.SumOfSellingPrice=0;
      this.filteredProducts = this.stock = products;
      console.log(this.stock)
      for(let item of products )
        {
          this.productCode = item.code;
          this.SumOfQuantity = this.SumOfQuantity + item.quantity
          this.SumOfPurchasingPrice = this.SumOfPurchasingPrice + (item.purchasePrice * item.quantity)
          this.SumOfSellingPrice = this.SumOfSellingPrice + item.totalPrice
        }
        console.log(this.SumOfQuantity)
        console.log(this.SumOfPurchasingPrice)
        console.log(this.SumOfSellingPrice)

      this.initializeTable(products);
    });

  }

  private initializeTable(products: Product[])
  {

    this.tableResource = new DataTableResource(products)
      this.tableResource.query({ offset: 0 })
        .then(items => {this.items = items
          });
      this.tableResource.count()
        .then(count => this.itemCount = count);
  }

  reloadItems(params)
  {
    if(!this.tableResource) return;

    this.tableResource.query(params)
      .then(items => this.items = items);
 
  }

  filter(query: string)
  { 
    this.filteredProducts = (query) ?
      this.stock.filter(p => p.name.toLowerCase().includes(query.toLowerCase())) : 
      this.stock;


    this.initializeTable(this.filteredProducts);
    
  }

  ngOnDestroy(){

    this.subscription.unsubscribe();

  }
  
  ngOnInit() {

  }

}
