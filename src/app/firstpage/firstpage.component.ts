import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ExcelService } from '../excel.service';
import { StockService } from '../stock.service';
import { take } from 'rxjs-compat/operator/take';


declare const $;


@Component({
  selector: 'firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent {


  name = 'Angular 6';
  data: any = [{
    eid: 'e101',
    ename: 'ravi',
    esal: 1000
  },
  {
    eid: 'e102',
    ename: 'ram',
    esal: 2000
  },
  {
    eid: 'e103',
    ename: 'rajesh',
    esal: 3000
  }];

  products: any ={}
  products$
  select: any = {};
  constructor(private excelService: ExcelService , private productService: ProductService, private stockService: StockService){

    

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
        
      
      //this.excelService.exportAsExcelFile(select, 'sample');
    })
    
  }
}
