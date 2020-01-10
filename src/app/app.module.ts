import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './shopping-cart/check-out/check-out.component';
import { OrderSuccessComponent } from './shopping-cart/order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './layouts/modules/admin-products/admin-products.component';
import { AdminOrdersComponent } from './layouts/modules/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { environment } from 'src/environments/environment.prod';
import { AuthGuardService } from './shares/services/auth-guard.service';
import { ProductFormComponent } from './layouts/modules/admin-products/product-form/product-form.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ShoppingCartSummaryComponent } from './shopping-cart/shopping-cart-summary/shopping-cart-summary.component';
import { ShippingFormComponent } from './shopping-cart/shipping-form/shipping-form.component';
import { ViewOrderComponent } from './layouts/modules/admin-orders/view-order/view-order.component';
import { ParticlesModule } from 'angular-particle';
import { PhoneComponent } from './phone/phone.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { PppComponent } from './layouts/modules/stock/ppp/ppp.component';
import { ViewDetailsComponent } from './layouts/modules/admin-orders/view-details/view-details.component';
import { BannerComponent } from './banner/banner.component';
import { HttpModule } from '@angular/http';
import { NavbarModule } from './bs-navbar/bs-navbar.modules';
import { CustomerDetailsComponent } from './layouts/modules/customer-details/customer-details.component';
import { StockComponent } from './layouts/modules/stock/stock.component';
import { StockFormComponent } from './layouts/modules/stock/stock-form/stock-form.component';
import { ReportComponent } from './layouts/modules/report/report.component';
import { ReportDetailsComponent } from './layouts/modules/report/report-details/report-details.component';
import { OrderStatusComponent } from './layouts/modules/admin-orders/order-status/order-status.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { DefaultModule } from './layouts/default/default.module';
import { SharesModule } from './shares/shares.module';
import { AddstockComponent } from './addstock/addstock.component';
import { UserOrderDetailsComponent } from './user-order-details/user-order-details.component';
import { OrdersStatusComponent } from './my-orders/orders-status/orders-status.component';



//import { ProductCardComponent } from './product-card/product-card.component';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
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
    AddstockComponent,
   

    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    ViewOrderComponent,
    PhoneComponent,
    WelcomeComponent,
    FooterComponent,
    ProductDetailsComponent,
    PppComponent,
    ViewDetailsComponent,
    BannerComponent,
    CustomerDetailsComponent,
    StockComponent,
    StockFormComponent,
    ReportComponent,
    ReportDetailsComponent,
   
    EditProfileComponent,
    UserOrderDetailsComponent,
    OrdersStatusComponent,
  
   
    
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,

    DefaultModule,
    SharesModule,

    NavbarModule,
    ReactiveFormsModule,
    ParticlesModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    NgbModule.forRoot(),
    RouterModule.forRoot([
      
      { path: '', component: WelcomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'products/details/:id', component: ProductDetailsComponent},
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'login', component: LoginComponent },
       {path: 'add', component: AddstockComponent},
     


      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService] },
      { path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuardService,] },
      { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuardService] },

      { path: 'edit/profile', component: EditProfileComponent, canActivate: [AuthGuardService] },
      
      {
        path: 'view/orders/details/:id',component: UserOrderDetailsComponent,canActivate: [AuthGuardService]
      },

     
       { path: 'check-out/:id', component: CheckOutComponent, canActivate: [AuthGuardService] },


       // { path: 'login/phone/number', component: PhoneComponent },
      //{ path: 'ppp', component: PppComponent},
      
      // {
      //   path: 'order/status/:id',
      //   component: OrderStatusComponent,
      // },

    ]),

  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
