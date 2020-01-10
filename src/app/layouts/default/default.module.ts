import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';

import { RouterModule } from '@angular/router';
import { MatSidenavModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { DashboardsComponent } from 'src/app/modules/dashboards/dashboards.component';
import { ShardModule } from '../shard/shard/shard.module';

@NgModule({
  
  declarations: [
    DefaultComponent,
    DashboardsComponent,
    

  ],
  imports: [
    CommonModule,
    RouterModule,
    ShardModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule

    
  ],
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }
