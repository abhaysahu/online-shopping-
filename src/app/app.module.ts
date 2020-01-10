import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { AuthGuardService } from './shares/services/auth-guard.service';
import { AdminAuthGuardService } from './shares/services/admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './shares/product-card/product-card.component';
import { ProductQuantityComponent } from './shares/product-quantity/product-quantity.component';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { ParticlesModule } from 'angular-particle';
import { PhoneComponent } from './phone/phone.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PppComponent } from './ppp/ppp.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { BannerComponent } from './banner/banner.component';
import { HttpModule } from '@angular/http';
import { NavbarModule } from './bs-navbar/bs-navbar.modules';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { StockComponent } from './stock/stock.component';
import { StockFormComponent } from './stock-form/stock-form.component';
import { ReportComponent } from './report/report.component';
import { ReportDetailsComponent } from './report-details/report-details.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { DefaultModule } from './layouts/default/default.module';
import { AddstockComponent } from './addstock/addstock.component';
import { SharesModule } from './shares/shares.module';



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
    OrderStatusComponent,
    EditProfileComponent,
    AddstockComponent,
   
    
    
    
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
      { path: 'login/phone/number', component: PhoneComponent },
      { path: 'ppp', component: PppComponent},


      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService] },
      { path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuardService,] },
      { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuardService] },

      { path: 'edit/profile', component: EditProfileComponent, canActivate: [AuthGuardService] },
      
      
      {
        path: 'order/status/:id',
        component: OrderStatusComponent,
      },
      
      { 
        path: 'add/Stock',component: AddstockComponent ,canActivate: [AuthGuardService, AdminAuthGuardService] 
      },
      
      {
        path: 'view/orders/details/:id',component: ViewDetailsComponent,canActivate: [AuthGuardService]
      },

     
       { path: 'check-out/:id', component: CheckOutComponent, canActivate: [AuthGuardService] },

       
       
      
    ]),

  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
