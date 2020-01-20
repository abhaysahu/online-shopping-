import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from 'src/app/shares/services/category.service';
import { CookieService } from 'ngx-cookie-service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  categories$;
  @Input('category') Category;

  browserLang = "";
  language = "";

  constructor(
    private categoryService: CategoryService,
    private translate: TranslateService, 
    private cookie: CookieService ) {

      translate.onLangChange.subscribe(lang=>{
        this.browserLang = lang;
    })
   
    this.language = this.cookie.get("language")
    console.log(this.language);

    if (this.language === "en" || this.language === "")
    {
      this.categories$ = categoryService.getAllEnglish();
    }

    else 
    {
      this.categories$ = categoryService.getAllHindi();

    }
    
   }



  ngOnInit() {


    
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.browserLang = event.lang
      if(this.browserLang === "en" || this.browserLang === "")
    {
      this.categories$ = this.categoryService.getAllEnglish();
    }

    else
    {
      this.categories$ = this.categoryService.getAllHindi();
    }
      //console.log(this.browserLang);
  });
  }

}
