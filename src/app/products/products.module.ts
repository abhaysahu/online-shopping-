import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { SharesModule } from '../shares/shares.module';
import { ProductsComponent } from './products.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from '../products/footer/footer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { Http } from '@angular/http';
import { MyMissingTranslationHandler } from '../shares/services/missingtemplate.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, MissingTranslationHandler } from '@ngx-translate/core';

// export function createTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }

@NgModule({
  declarations: [
    ProductsComponent,
    BannerComponent,
    FooterComponent,
    ProductDetailsComponent,
    ProductFilterComponent,
  ],

  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharesModule,

  //   TranslateModule.forChild({
  //     loader: {
  //       provide: TranslateLoader,
  //       useFactory: (createTranslateLoader),
  //       deps: [HttpClient]
  //     },
  //     isolate: true
  // }),
  ],
  

  providers: [
    { provide: MissingTranslationHandler, useClass: MyMissingTranslationHandler}

  ]
})
export class ProductsModule { }
