import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';

import { RouterModule } from '@angular/router';
import { MatSidenavModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule, MatDialogModule, MatSortModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from 'src/app/layouts/modules/dashboard.service';
import { DashboardsComponent } from 'src/app/layouts/modules/dashboards/dashboards.component';
import { ShardModule } from '../shard/shard/shard.module';
import { DefaultRoutingModule } from './default-routing.module';
import { AdminProductsComponent } from '../modules/admin-products/admin-products.component';
import { ProductFormComponent } from '../modules/admin-products/product-form/product-form.component';
import { AdminOrdersComponent } from '../modules/admin-orders/admin-orders.component';
import { ViewOrderComponent } from '../modules/admin-orders/view-order/view-order.component';
import { ViewDetailsComponent } from '../modules/admin-orders/view-details/view-details.component';
import { OrderStatusComponent } from '../modules/admin-orders/order-status/order-status.component';
import { CustomerDetailsComponent } from '../modules/customer-details/customer-details.component';
import { ReportComponent } from '../modules/report/report.component';
import { ReportDetailsComponent } from '../modules/report/report-details/report-details.component';
import { StockComponent } from '../modules/stock/stock.component';
import { StockFormComponent } from '../modules/stock/stock-form/stock-form.component';
import { PppComponent } from '../modules/stock/ppp/ppp.component';
import { AddstockComponent } from 'src/app/addstock/addstock.component';
import { PhoneComponent } from 'src/app/phone/phone.component';
import { SharesModule } from 'src/app/shares/shares.module';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, MissingTranslationHandler } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MyMissingTranslationHandler } from 'src/app/shares/services/missingtemplate.component';
import { DataTableModule } from 'angular5-data-table';


// export function createTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }


@NgModule({
  
  declarations: [
    DefaultComponent,
    DashboardsComponent,

    AdminProductsComponent,
    ProductFormComponent,

    AdminOrdersComponent,
    ViewOrderComponent,
    ViewDetailsComponent,
    OrderStatusComponent,

    CustomerDetailsComponent,


    
    ReportComponent,
    ReportDetailsComponent,

    StockComponent,
    StockFormComponent,
    PppComponent,

    AddstockComponent,
    PhoneComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    ShardModule,
    SharesModule,

    DataTableModule,    
    MatTableModule,
    MatPaginatorModule, 
    MatSortModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    
    MatDialogModule,
    DefaultRoutingModule,
  //   TranslateModule.forChild({
  //     loader: {
  //       provide: TranslateLoader,
  //       useFactory: (createTranslateLoader),
  //       deps: [HttpClient]
  //     },
  //     isolate: true
  // }),
    //SharesModule
  ],
  
  providers: [
    DashboardService,
    { provide: MissingTranslationHandler, useClass: MyMissingTranslationHandler}

  ]
})
export class DefaultModule { }
