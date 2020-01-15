import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { AuthGuardService } from '../shares/services/auth-guard.service';
import { OrderSuccessComponent } from './order-success/order-success.component';

const routes: Routes = [


  { path: '', component: ShoppingCartComponent,

  children: [
    { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService] },
      { path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuardService,] },
     
  ]


},




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingCartRoutingModule { }
