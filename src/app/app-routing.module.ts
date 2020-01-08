import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';

import { DashboardsComponent } from './modules/dashboards/dashboards.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AuthGuardService } from './auth-guard.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { ReportComponent } from './report/report.component';
import { StockComponent } from './stock/stock.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { ReportDetailsComponent } from './report-details/report-details.component';
import { StockFormComponent } from './stock-form/stock-form.component';
import { AddstockComponent } from './addstock/addstock.component';
import { OrderStatusComponent } from './order-status/order-status.component';

const routes: Routes = [{
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
    children :[ 

      { 
        path: 'add/Stock',component: AddstockComponent ,canActivate: [AuthGuardService, AdminAuthGuardService] 
      }
    ] 
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
  exports: [RouterModule]
})
export class AppRoutingModule { }
