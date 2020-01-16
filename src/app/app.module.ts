import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { LoginComponent } from './login/login.component';
import { environment } from 'src/environments/environment.prod';


import { AuthGuardService } from './shares/services/auth-guard.service';
import { ParticlesModule } from 'angular-particle';
import { WelcomeComponent } from './welcome/welcome.component';
import { HttpModule, Http } from '@angular/http';
import { NavbarModule } from './bs-navbar/bs-navbar.modules';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UserOrderDetailsComponent } from './user-order-details/user-order-details.component';
import { OrdersStatusComponent } from './my-orders/orders-status/orders-status.component';
import { MyMissingTranslationHandler } from './shares/services/missingtemplate.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CustomFormsModule } from 'ng2-validation';
import { TranslateModule, TranslateLoader, MissingTranslationHandler } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { AddstockComponent } from './addstock/addstock.component';


 
//import { ProductCardComponent } from './product-card/product-card.component';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    //AddstockComponent,
    
    
    
    MyOrdersComponent,
    LoginComponent,
    OrdersStatusComponent,
   
    WelcomeComponent,

    EditProfileComponent,
    UserOrderDetailsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    CustomFormsModule,


    //DefaultModule,
    //ProductsModule,
    //SharesModule,

    NavbarModule,
    ReactiveFormsModule,
    ParticlesModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),


    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      },
      isolate: false
  }),


    RouterModule.forRoot([
      
      { path: '', component: WelcomeComponent },


      
      { path: 'login', component: LoginComponent },
       //{path: 'add', component: AddstockComponent},
     


       { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuardService] },

      { path: 'edit/profile', component: EditProfileComponent, canActivate: [AuthGuardService] },
      
      {
        path: 'view/orders/details/:id',component: UserOrderDetailsComponent,canActivate: [AuthGuardService]
      },

     
       //{ path: 'check-out/:id', component: CheckOutComponent, canActivate: [AuthGuardService] },


       // { path: 'login/phone/number', component: PhoneComponent },
      //{ path: 'ppp', component: PppComponent},
      
      // {
      //   path: 'order/status/:id',
      //   component: OrderStatusComponent,
      // },

    ]),

  ],

  providers: [
    { provide: MissingTranslationHandler, useClass: MyMissingTranslationHandler}

  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
