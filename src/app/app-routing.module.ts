import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  
  {
    // loadChildren: './admin-orders/admin-orders.module#AdminOrdersModule'
    path: 'dashboards',
    loadChildren:'./layouts/default/default.module#DefaultModule'
  },

  {
    path: 'products',
    loadChildren: './default-product/default-product.module#DefaultProductModule'
  },
  
  { 
    path: 'shopping-cart',
    loadChildren: './default-shopping-cart/default-shopping-cart.module#DefaultShoppingCartModule'
  },
 

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
    ] 
})
export class AppRoutingModule { }
