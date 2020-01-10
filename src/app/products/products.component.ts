import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../shares/services/product.service';
import { CategoryService } from '../shares/services/category.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ShoppingCartService } from '../shares/services/shopping-cart.service';
import { Subscription } from 'rxjs'; 
import { TranslateService, LangChangeEvent } from 'ng2-translate';
import { LanguageService } from '../shares/services/language.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy{
 
  products: Product[] = [];
  filteredProducts: Product[] = [];
  
  private _searchTerm: string;
  
  get searchTerm(): string{
    return this._searchTerm;
  }

  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredProducts = this.filtereProducts(value);
  }

  filtereProducts(searchString: string){
    return this.products.filter(product => 
      product.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);

  }

  categories$;
  category: string;
  cart: any;
  subscription: Subscription;
  language = "";
  browserLang = "";


  constructor(
    private route: ActivatedRoute,
    private productsService: ProductService, 
    private categoryService: CategoryService,
    private translate: TranslateService,
    private cookie: CookieService,
    private shoppingCartService: ShoppingCartService
    ) {


      translate.onLangChange.subscribe(lang=>{
        this.browserLang = lang;
    })
  
      
    this.language = this.cookie.get("language")
      
  
  
      if(this.language == "en" || this.language == "")
      {
        console.log("yes")

        this.categories$ = categoryService.getAllEnglish();

        productsService.getAllBoth().subscribe(products => {
          this.products = products
          
    
          route.queryParamMap.subscribe(params => {
            this.category = params.get('category');
      
            this.filteredProducts = (this.category) ?
              this.products.filter(p => p.category === this.category) : 
              this.products;
              
        }); 
    
        });
  
      }
  
      else
      {
        this.categories$ = categoryService.getAllHindi();

        productsService.getAllBoth().subscribe(products => {

          for(let hindi of products )
        {
          hindi.name = hindi.nameH
          hindi.title = hindi.titleH
         
        }

          this.products = products
          
    
          route.queryParamMap.subscribe(params => {
            this.category = params.get('category');
      
            this.filteredProducts = (this.category) ?
              this.products.filter(p => p.category === this.category) : 
              this.products;
              
        }); 
    
        });
      }
   }


   async ngOnInit()
   {

      this.subscription = (await this.shoppingCartService.getCart())
      .subscribe(cart => this.cart = cart);




      this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
        this.browserLang = event.lang
  
        if(this.browserLang === "en" || this.browserLang === "")
        {

          this.categories$ = this.categoryService.getAllEnglish();

          this.productsService.getAllBoth().subscribe(products => {
            this.products = products
  
            this.route.queryParamMap.subscribe(params => {
              this.category = params.get('category');
        
              this.filteredProducts = (this.category) ?
                this.products.filter(p => p.category === this.category) : 
                this.products;
                
          }); 
      
          });
          
        }
    
        else
        {

          this.categories$ = this.categoryService.getAllHindi();

          this.productsService.getAllBoth().subscribe(products => {
           
            for(let hindi of products )
              {
                hindi.name = hindi.nameH
                hindi.title = hindi.titleH
              }
            this.products = products
            
      
            this.route.queryParamMap.subscribe(params => {
              this.category = params.get('category');
        
              this.filteredProducts = (this.category) ?
                this.products.filter(p => p.category === this.category) : 
                this.products;
                
          }); 
      
          });
         
        }
        
    });



   }

   ngOnDestroy()
   {
     this.subscription.unsubscribe();
   }


}
