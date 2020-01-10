import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subscription } from 'rxjs';
import { DataTableResource } from 'angular5-data-table';
import { Product } from '../../../shares/models/product';
import { ProductService } from '../../../shares/services/product.service';
import { StockService } from 'src/app/shares/services/stock.service';
import { ExcelService } from 'src/app/shares/services/excel.service';



declare const $;



@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  stock: Product[];
  filteredProducts: any[];
  subscription: Subscription;
  tableResource: DataTableResource<Product>;
  items: Product[] = [];
  itemCount: number;
  select: string;
  message;
  messageClass;

  products: any ={}
   
  constructor(private stockService: StockService, private excelService: ExcelService) { 

    
      this.subscription = this.stockService.getAll()
    .subscribe(products => {
      console.log(products)
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
  
  exportAsXLSX():void {
   
    let select = []

    this.stockService.getAll().subscribe(products =>{
      this.products = products

      select = products.map(products => {
        return {
          code: products.code,
          name:products.name,
          bill: products.bill,
          stock: products.stock,
          price:products.price,
          totalPrice:(products.price * products.stock)
        }
      })

      console.log(select)
        
      
      this.excelService.exportAsExcelFile(select, 'sample');
    })
    
  }

  ngOnDestroy(){

    this.subscription.unsubscribe();

  }
  
  ngOnInit() {

  }

}
