import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultShoppingCartRoutingModule } from './default-shopping-cart-routing.module';
import { SharesModule } from '../shares/shares.module';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { DefaultShoppingCartComponent } from './default-shopping-cart.component';

@NgModule({
  declarations: [
    DefaultShoppingCartComponent,

    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
  ],
  imports: [
    CommonModule,
    DefaultShoppingCartRoutingModule,
    SharesModule
  ]
})
export class DefaultShoppingCartModule { }
