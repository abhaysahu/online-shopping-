import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../shares/services/product.service';
import { Product } from '../../shares/models/product';
import { ShoppingCartService } from '../../shares/services/shopping-cart.service';
import { ShoppingCart } from '../../shares/models/shopping-cart';
import { LanguageService } from '../../shares/services/language.service';
import { CookieService } from 'ngx-cookie-service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  @Input ('shopping-cart') shoppingCart: ShoppingCart;

  products: any ={};
  id;

  browserLang = "";
  language = "";

  constructor(  
    private router: Router,
    private db: AngularFireDatabase,
    private route: ActivatedRoute,
    private translate: TranslateService,
    private cookie: CookieService,
    private productService: ProductService,
    private cartService: ShoppingCartService
    ) {


      translate.onLangChange.subscribe(lang=>{
        this.browserLang = lang; 
    })
  
    this.language = this.cookie.get("language")
      
  
  
      if(this.language === "en" || this.language === "")
      {
        this.id = route.snapshot.paramMap.get('id');
        productService.getBoth(this.id).subscribe(products => {
          this.products = products
        })
        
      }
  
      else
      {
        this.id = route.snapshot.paramMap.get('id');
        productService.getBoth(this.id).subscribe(products => {
          this.products = products

          this.products.name = this.products.nameH
          this.products.description = this.products.descriptionH
         
          
        })
      }
     }

     back()
     { 
       this.router.navigate(['products']); 
     }

  ngOnInit() {

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.browserLang = event.lang
      console.log(this.browserLang);

      if(this.browserLang === "en" || this.browserLang === "")
      {
        
        this.id = this.route.snapshot.paramMap.get('id');
       this.productService.getBoth(this.id).subscribe(products => {
          this.products = products
        })

      }
  
      else
      {
        this.id = this.route.snapshot.paramMap.get('id');
        this.productService.getBoth(this.id).subscribe(products => {
          this.products = products

          this.products.name = this.products.nameH
          this.products.description = this.products.descriptionH

        })

      }
      
  });
  }

}
