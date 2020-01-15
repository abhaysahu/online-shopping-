import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/shares/services/product.service';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/shares/models/product';
//import { DataTableResource } from 'angular-4-data-table';
import { DataTableResource } from 'angular5-data-table';
import { LanguageService } from 'src/app/shares/services/language.service';
import { CookieService } from 'ngx-cookie-service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';


@Component({
  selector: 'app-admin-products', 
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: any ={}
  filteredProducts: any[];
  subscription: Subscription;
  tableResource: DataTableResource<Product>;
  items: Product[] = [];
  itemCount: number;
  select: string;
  browserLang = "";
  language = "";

  constructor(private productService: ProductService, private translate: TranslateService, private cookie: CookieService) { 

    translate.onLangChange.subscribe(lang=>{
      this.browserLang = lang;
  })
 
  this.language = this.cookie.get("language")
  console.log(this.language);


    if(this.language === "en" || this.language === "")
    {
      this.subscription = this.productService.getAllBoth()
    .subscribe(products => {
      this.filteredProducts = this.products = products;
      this.initializeTable(products);
    });
    }

    else
    {
      this.subscription = this.productService.getAllBoth()
      .subscribe(products => {
        for(let hindi of products )
        {
          hindi.name = hindi.nameH
          hindi.title = hindi.titleH
          console.log(hindi)
        }
        this.filteredProducts = this.products = products;

        this.initializeTable(products);
      });

    }

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
      this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : 
      this.products;


    this.initializeTable(this.filteredProducts);
    
  }


  ngOnDestroy(){

    this.subscription.unsubscribe();

  }

  ngOnInit() {


    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.browserLang = event.lang
      if(this.browserLang === "en" || this.browserLang === "")
    {
      this.subscription = this.productService.getAllBoth()
    .subscribe(products => {
      this.filteredProducts = this.products = products;
      this.initializeTable(products);
    });

    }

    else
    {
      this.subscription = this.productService.getAllBoth()
      .subscribe(products => {

        for(let hindi of products )
        {
          hindi.name = hindi.nameH
          hindi.title = hindi.titleH
        }

        this.filteredProducts = this.products = products;
        console.log(products)
        this.initializeTable(products);
      });

    }
      //console.log(this.browserLang);
  });
  }

}
