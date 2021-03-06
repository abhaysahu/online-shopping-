import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { ShoppingCartService } from 'src/app/shares/services/shopping-cart.service';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {



  product:any={};
  message;
  messageClass;


  show: boolean = true;
  
  
  cart$;
  browserLang = "";
  language = "";


  constructor(
    private shoppingCartService: ShoppingCartService,
    private translate: TranslateService, 
    private cookie: CookieService,
    private router: Router,
    ) { 
      this.product.name = "";
          this.product.weight = "";

      translate.onLangChange.subscribe(lang=>{
        this.browserLang = lang;
    })
   
    this.language = this.cookie.get("language")
    console.log(this.language);
   
  
    }



    save(product){

      const random = Math.floor(Math.random() * (999999 - 100000)) + 100000;

      product.keys = random;
      product.quantity = 1;
      product.price = 0;
      

      this.shoppingCartService.ManualAddToCart(product).then(data=>{

        if(data)
        {
          this.messageClass = 'alert alert-success';
          this.message = "Stock Update Success fully";
          
        }
        else
        {
          this.messageClass = 'alert alert-danger';
          this.message = "Invalid"
        }

      })

     
    
    }


    delete(id)
    {
        if(!confirm('Are you sure yow want to delete this Manual product?')) return;

        console.log(id)
        
        this.shoppingCartService.delete(id);
        
        //this.router.navigate(['/check-out']);
      
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
