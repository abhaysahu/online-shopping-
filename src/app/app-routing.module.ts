import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';

import { PostsComponent } from './modules/posts/posts.component';
import { DashboardsComponent } from './modules/dashboards/dashboards.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AuthGuardService } from './auth-guard.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { ReportComponent } from './report/report.component';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [{
  path: 'dashboards',component: DefaultComponent,
  children: [{
    path:'', component: DashboardsComponent
  },
  {
    path: 'posts', component: PostsComponent
  },
  { 
    path: 'admin/orders',component: AdminOrdersComponent, canActivate: [AuthGuardService, AdminAuthGuardService]
  },
  { 
    path: 'admin/products',component: AdminProductsComponent,canActivate: [AuthGuardService, AdminAuthGuardService] 
  },
  { 
    path: 'Customer/Details',component: CustomerDetailsComponent, canActivate: [AuthGuardService, AdminAuthGuardService] 
  },
  { 
    path: 'report',component: ReportComponent,canActivate: [AuthGuardService, AdminAuthGuardService] 
  },
  { 
    path: 'Stock',component: StockComponent,canActivate: [AuthGuardService, AdminAuthGuardService] 
  },


]
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
