import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';

import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { ShardModule } from 'src/app/shard/shard/shard.module';
import { MatSidenavModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { DashboardsComponent } from 'src/app/modules/dashboards/dashboards.component';

@NgModule({
  
  declarations: [
    DefaultComponent,
    DashboardsComponent,
    PostsComponent

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
