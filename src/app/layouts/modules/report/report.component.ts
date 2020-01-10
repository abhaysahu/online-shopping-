import { Component, OnInit } from '@angular/core';
import { Product } from '../../../shares/models/product';
import { DataTableResource } from 'angular5-data-table';
import { StockService } from '../../../shares/services/stock.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  stock: Product[];
  filteredProducts: any[];
  subscription: Subscription;
  tableResource: DataTableResource<Product>;
  items: Product[] = [];
  itemCount: number;
  select: string;
  browserLang = "";
  language = "";

   
  constructor(private stockService: StockService) { 

    
      this.subscription = this.stockService.getAll()
    .subscribe(products => {
      this.filteredProducts = this.stock = products;
      this.initializeTable(products);
    });

  }

  private initializeTable(products: Product[])
  {
    this.tableResource = new DataTableResource(products);
      this.tableResource.query({ offset: 0})
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
