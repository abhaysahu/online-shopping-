import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharesRoutingModule } from './shares-routing.module';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { UserService } from './services/user.service';
import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { OrderService } from './services/order.service';
import { WindowService } from './services/window.service';
import { CookieService } from 'ngx-cookie-service';
import { StockService } from './services/stock.service';
import { ReportService } from './services/report.service';
import { ExcelService } from './services/excel.service';
import { MyMissingTranslationHandler } from './services/missingtemplate.component';
import { RouterModule } from '@angular/router';

import { ProductCardComponent } from './product-card/product-card.component';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { DataTableModule } from 'angular5-data-table';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader, MissingTranslationHandler } from '@ngx-translate/core';




export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
    
  ],

  imports: [
    CommonModule,
    HttpClientModule,
    SharesRoutingModule,
    FormsModule,
    CustomFormsModule,
    AngularFireDatabaseModule, 
    AngularFireAuthModule, 
    
    
    RouterModule.forChild([]),

 

    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      },
      isolate: false
  }),
  ],

  exports: [
    ProductCardComponent,
    ProductQuantityComponent,
    CommonModule,
    FormsModule,
    CustomFormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,

    TranslateModule
  ],

  providers: [
    AuthService,
    AuthGuardService,
    AdminAuthGuardService,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService,
    WindowService,
    CookieService,
    StockService,
    ReportService,
    ExcelService,
  
    { provide: MissingTranslationHandler, useClass: MyMissingTranslationHandler}
  ],
})
export class SharesModule { }
