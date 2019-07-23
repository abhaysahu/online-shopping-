import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { TranslateService, LangChangeEvent } from 'ng2-translate';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {


  show: boolean = true;
  
  
  cart$;
  browserLang = "";
  language = "";
  

  constructor(
    private shoppingCartService: ShoppingCartService,
    private translate: TranslateService, 
    private cookie: CookieService
    ) { 

      translate.onLangChange.subscribe(lang=>{
        this.browserLang = lang;
    })
   
    this.language = this.cookie.get("language")
    console.log(this.language);
  
    }

  async ngOnInit() {

    if(this.language === "en" || this.language === "")
    {
      this.show = true
      this.cart$ = await this.shoppingCartService.getCart();
      
    }

    else
    {
      this.show = false
      console.log("hindi")
      this.cart$ = await this.shoppingCartService.getCart(); 
    }



    this.translate.onLangChange.subscribe(async (event: LangChangeEvent) => {
      this.browserLang = event.lang
      if(this.browserLang === "en" || this.browserLang === "")
    {
      this.show = true
      console.log(this.show)
      this.cart$ = await this.shoppingCartService.getCart();
    }

    else
    {
      this.show = false
      console.log(this.show)
      this.cart$ = await this.shoppingCartService.getCart(); 
    }

  });
  }

  clearCart()
  {
    this.shoppingCartService.clearCart();
  }

}
