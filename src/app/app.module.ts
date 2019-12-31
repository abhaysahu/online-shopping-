import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { DataTableModule } from 'angular5-data-table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader, TranslateStaticLoader, MissingTranslationHandler } from 'ng2-translate';
import * as $ from "jquery"; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { UserService } from './user.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './category.service';
import { ProductService } from './product.service';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ShoppingCartService } from './shopping-cart.service';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';
import { OrderService } from './order.service';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { DevelopersComponent } from './developers/developers.component';
import { ParticlesModule } from 'angular-particle';
import { PhoneComponent } from './phone/phone.component';
import { WindowService } from './window.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PppComponent } from './ppp/ppp.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { BannerComponent } from './banner/banner.component';
import { HttpModule, Http } from '@angular/http';
import { MyMissingTranslationHandler } from './missingtemplate.component';
import { NavbarModule } from './bs-navbar/bs-navbar.modules';
import { CookieService } from 'ngx-cookie-service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { StockComponent } from './stock/stock.component';
import { StockFormComponent } from './stock-form/stock-form.component';
import { StockService } from './stock.service';
import { ReportService } from './report.service';
import { ReportComponent } from './report/report.component';
import { ReportDetailsComponent } from './report-details/report-details.component';
import { ExcelService } from './excel.service';
import { OrderStatusComponent } from './order-status/order-status.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';


export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

//import { ProductCardComponent } from './product-card/product-card.component';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    FirstpageComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent,
    ProductQuantityComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    ViewOrderComponent,
    DevelopersComponent,
    PhoneComponent,
    WelcomeComponent,
    FirstpageComponent,
    FooterComponent,
    ProductDetailsComponent,
    PppComponent,
    ViewDetailsComponent,
    BannerComponent,
    DashboardComponent,
    CustomerDetailsComponent,
    StockComponent,
    StockFormComponent,
    ReportComponent,
    ReportDetailsComponent,
    OrderStatusComponent,
    EditProfileComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomFormsModule,
    HttpModule,
    NavbarModule,
    DataTableModule,
    FormsModule,
    ReactiveFormsModule,
    ParticlesModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,                
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: WelcomeComponent },
      { path: 'firstpage', component: FirstpageComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'products/details/:id', component: ProductDetailsComponent},
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'login', component: LoginComponent },
      { path: 'login/phone/number', component: PhoneComponent },
      { path: 'developer', component: DevelopersComponent},
      { path: 'ppp', component: PppComponent},


      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService] },
      { path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuardService,] },
      { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuardService] },

      { path: 'edit/profile', component: EditProfileComponent, canActivate: [AuthGuardService] },
      
     
      { path: 'admin/products/new',
        component: ProductFormComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService] 
      },

      { path: 'admin/stock/new',
        component: StockFormComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService] 
      },

      {
        path: 'order/status/:id',
        component: OrderStatusComponent,
      },



      { path: 'admin/stock/:id',
        component: StockFormComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService] 
      },



      { path: 'Customer/Details',
        component: CustomerDetailsComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService] 
      },

      { path: 'Dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService] 
      },

      { path: 'Stock',
        component: StockComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService] 
      },

      { path: 'report',
        component: ReportComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService] 
      },

      { path: 'report/:id',
        component: ReportDetailsComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService] 
      },

      { 
        path: 'admin/products/:id',
        component: ProductFormComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService] 
      },
      { 
        path: 'admin/products',
        component: AdminProductsComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService] 
      },
      { path: 'admin/orders',
       component: AdminOrdersComponent, 
       canActivate: [AuthGuardService, AdminAuthGuardService]
       },
       {
         path: 'footer',
         component: FooterComponent

       },
       { path: 'check-out/:id', component: CheckOutComponent, canActivate: [AuthGuardService , AdminAuthGuardService] },

       { path: 'view/orders/:id',
       component: ViewOrderComponent, 
       canActivate: [AuthGuardService]
       },
       { path: 'view/orders/details/:id',
       component: ViewDetailsComponent, 
       canActivate: [AuthGuardService]
       }
    ]),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
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
  bootstrap: [AppComponent]
})
export class AppModule { }
