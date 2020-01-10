import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';

import { DashboardsComponent } from './layouts/modules/dashboards/dashboards.component';
import { AdminOrdersComponent } from './layouts/modules/admin-orders/admin-orders.component';
import { AuthGuardService } from './shares/services/auth-guard.service';
import { AdminAuthGuardService } from './shares/services/admin-auth-guard.service';
import { AdminProductsComponent } from './layouts/modules/admin-products/admin-products.component';
import { CustomerDetailsComponent } from './layouts/modules/customer-details/customer-details.component';
import { ReportComponent } from './layouts/modules/report/report.component';
import { StockComponent } from './layouts/modules/stock/stock.component';
import { ViewOrderComponent } from './layouts/modules/admin-orders/view-order/view-order.component';
import { ViewDetailsComponent } from './layouts/modules/admin-orders/view-details/view-details.component';
import { ProductFormComponent } from './layouts/modules/admin-products/product-form/product-form.component';
import { ReportDetailsComponent } from './layouts/modules/report/report-details/report-details.component';
import { StockFormComponent } from './layouts/modules/stock/stock-form/stock-form.component';
import { DefaultModule } from './layouts/default/default.module';

const routes: Routes = [
  
  {
    // loadChildren: './admin-orders/admin-orders.module#AdminOrdersModule'
    path: 'dashboards',component: DefaultComponent,
    loadChildren:'./layouts/default/default.module#DefaultModule'
  },
  
  { 
  path: 'dashboards',component: DefaultComponent,
  children: [{
    path:'', component: DashboardsComponent 
  }, 
    
  { 
    path: 'admin/orders',component: AdminOrdersComponent, canActivate: [AuthGuardService, AdminAuthGuardService],
  },
  {
    path: 'admin/view/orders/details/:id',component: ViewDetailsComponent,canActivate: [AuthGuardService,AdminAuthGuardService]
  },
  { 
    path: 'view/orders/:id',component: ViewOrderComponent, canActivate: [AuthGuardService, AdminAuthGuardService]
  },
  // {
  //   path: 'order/status/:id',component: OrderStatusComponent,canActivate: [AuthGuardService, AdminAuthGuardService]
  // },


 

  { 
    path: 'admin/products',component: AdminProductsComponent,canActivate: [AuthGuardService, AdminAuthGuardService] 
  },
  { 
    path: 'admin/products/new', component: ProductFormComponent, canActivate: [AuthGuardService, AdminAuthGuardService] 
  },
  { 
    path: 'admin/products/:id',component: ProductFormComponent,canActivate: [AuthGuardService, AdminAuthGuardService] 
  },
 



  { 
    path: 'Customer/Details',component: CustomerDetailsComponent, canActivate: [AuthGuardService, AdminAuthGuardService] 
  },



  { 
    path: 'report',component: ReportComponent,canActivate: [AuthGuardService, AdminAuthGuardService] 
  },
  { 
    path: 'report/:id',component: ReportDetailsComponent,canActivate: [AuthGuardService, AdminAuthGuardService] 
  },



  { 
    path: 'Stock',component: StockComponent,canActivate: [AuthGuardService, AdminAuthGuardService],
    
  },
  
  { 
    path: 'admin/stock/new',component: StockFormComponent, canActivate: [AuthGuardService, AdminAuthGuardService] 
  }, 
  { 
    path: 'admin/stock/:id',component: StockFormComponent,canActivate: [AuthGuardService, AdminAuthGuardService] 
  },


]
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
    ]
})
export class AppRoutingModule { }
