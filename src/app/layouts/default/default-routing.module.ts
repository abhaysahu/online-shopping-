import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './default.component';
import { DashboardsComponent } from '../modules/dashboards/dashboards.component';
import { AdminOrdersComponent } from '../modules/admin-orders/admin-orders.component';
import { AuthGuardService } from 'src/app/shares/services/auth-guard.service';
import { AdminAuthGuardService } from 'src/app/shares/services/admin-auth-guard.service';
import { ViewDetailsComponent } from '../modules/admin-orders/view-details/view-details.component';
import { ViewOrderComponent } from '../modules/admin-orders/view-order/view-order.component';
import { AdminProductsComponent } from '../modules/admin-products/admin-products.component';
import { ProductFormComponent } from '../modules/admin-products/product-form/product-form.component';
import { CustomerDetailsComponent } from '../modules/customer-details/customer-details.component';
import { ReportComponent } from '../modules/report/report.component';
import { ReportDetailsComponent } from '../modules/report/report-details/report-details.component';
import { StockComponent } from '../modules/stock/stock.component';
import { StockFormComponent } from '../modules/stock/stock-form/stock-form.component';




const routes: Routes = [
  
  { 
  path: '',component: DefaultComponent,canActivate: [AuthGuardService, AdminAuthGuardService],
  children: [
    
  {
    path:'', component: DashboardsComponent ,canActivate: [AuthGuardService, AdminAuthGuardService],
  }, 


  //this is for Admin Order Part
    
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




  //this is for Admin Product 

  { 
    path: 'admin/products',component: AdminProductsComponent,canActivate: [AuthGuardService, AdminAuthGuardService] 
  },
  { 
    path: 'admin/products/new', component: ProductFormComponent, canActivate: [AuthGuardService, AdminAuthGuardService] 
  },
  { 
    path: 'admin/products/:id',component: ProductFormComponent,canActivate: [AuthGuardService, AdminAuthGuardService] 
  },
 



  //this is for customer details

  { 
    path: 'Customer/Details',component: CustomerDetailsComponent, canActivate: [AuthGuardService, AdminAuthGuardService] 
  },


  //this is for report
  { 
    path: 'report',component: ReportComponent,canActivate: [AuthGuardService, AdminAuthGuardService] 
  },
  { 
    path: 'report/:id',component: ReportDetailsComponent,canActivate: [AuthGuardService, AdminAuthGuardService] 
  },




  //this is for to mantain the Stock
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
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class DefaultRoutingModule { }
