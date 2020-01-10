import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shares/services/shopping-cart.service';
import { ShoppingCart } from '../shares/models/shopping-cart';
import { Subscription, Observable } from 'rxjs';
import { TranslateService, LangChangeEvent } from 'ng2-translate';
import { CookieService } from 'ngx-cookie-service';


@Component({ 
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
}) 
export class CheckOutComponent implements OnInit {
  cart$: Observable<ShoppingCart>;

  browserLang = "";
  language = "";

  constructor(
    private shoppingCartService: ShoppingCartService,
    private translate: TranslateService, 
    private cookie: CookieService
  ){

    translate.onLangChange.subscribe(lang=>{
      this.browserLang = lang;
  })
 
  this.language = this.cookie.get("language")
  console.log(this.language);




  }

  async ngOnInit(){

    this.cart$ = await this.shoppingCartService.getCart();

  //   if(this.language === "en" || this.language === "")
  //   {
  //     this.cart$ = await this.shoppingCartService.getCart();
  //   }

  //   else
  //   {
  //     console.log("hindi")
  //     this.cart$ = await this.shoppingCartService.getCartHindi(); 
  //   }



  //   this.translate.onLangChange.subscribe(async (event: LangChangeEvent) => {
  //     this.browserLang = event.lang
  //     if(this.browserLang === "en" || this.browserLang === "")
  //   {
  //     this.cart$ = await this.shoppingCartService.getCart();
  //   }

  //   else
  //   {
  //     this.cart$ = await this.shoppingCartService.getCartHindi(); 
  //   }

  // }); 
 }

}
