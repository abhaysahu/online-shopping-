import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { ShoppingCartComponent } from './shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { SharesModule } from '../shares/shares.module';

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
    SharesModule
  ]
})
export class ShoppingCartModule { }
