import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { ShoppingCartComponent } from './shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { SharesModule } from '../shares/shares.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, MissingTranslationHandler } from '@ngx-translate/core';
import { MyMissingTranslationHandler } from '../shares/services/missingtemplate.component';

// export function createTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }

@NgModule({
  declarations: [
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
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
export class ShoppingCartModule { }
