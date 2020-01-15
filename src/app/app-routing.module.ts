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
    loadChildren: './products/products.module#ProductsModule'
  },
  
  {
    path: 'shopping-cart',
    loadChildren: './shopping-cart/shopping-cart.module#ShoppingCartModule'
  },
 

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
    ] 
})
export class AppRoutingModule { }
