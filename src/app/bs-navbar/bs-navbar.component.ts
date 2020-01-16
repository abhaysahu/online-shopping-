import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../shares/services/auth.service';
import { AppUser } from '../shares/models/app-user';
import { ShoppingCartService } from '../shares/services/shopping-cart.service';
import { Observable, Subscription } from 'rxjs';
import { ShoppingCart } from '../shares/models/shopping-cart';

import { ActivatedRoute } from '@angular/router';
import { LanguageService } from '../shares/services/language.service';
import { CookieService } from 'ngx-cookie-service';
import { TranslateService } from '@ngx-translate/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

public name: "abhay shau"

showNav = false;

  private subscription: Subscription;

  appUser: AppUser;
  cart$: Observable<ShoppingCart>;
  language;

  constructor(
    private auth: AuthService, 
    private cookie: CookieService,
    private shoppingCartService: ShoppingCartService,
    private translate: TranslateService, 
    private activatedRoute: ActivatedRoute,
    private db: AngularFireDatabase,
    ) {   

      this.language = this.cookie.get("language")

      




      translate.addLangs(["en", "hi"]);
      translate.setDefaultLang(this.language)

      if(!this.language)
      {
      this.cookie.set("language", "en");
      console.log(this.language)
      let browserLang = translate.getBrowserLang();
      translate.use(browserLang.match(/en|hi/) ? browserLang : 'en');
      }
 
  }

  login() 
  {
    this.auth.login();
  }


  loginFaceBook()
  {
    this.auth.loginFaceBook();

  }

  changeLanguage(lang){
    this.cookie.set("language", lang);
    this.translate.use(lang); 
}


 async ngOnInit(){

   // subscribe to router event
   this.subscription = this.activatedRoute.queryParams.subscribe(
    (param: any) => {
      let locale = param['locale'];
      if (locale !== undefined){
          this.translate.use(locale);
      }
    });

    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
    this.cart$ = await this.shoppingCartService.getCart();

  }

  ngOnDestroy() {
    // prevent memory leak by unsubscribing
    this.subscription.unsubscribe();
  }

  logout()
  {
    this.auth.logout();
  }

}
