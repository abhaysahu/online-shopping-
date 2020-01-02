import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../component/footer/footer.component';
import { HeaderComponent } from '../component/header/header.component';
import { SidebarComponent } from '../component/sidebar/sidebar.component';
import { DefaultModule } from 'src/app/layouts/default/default.module';
import { MatDividerModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, MatMenuModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule  } from '@angular/flex-layout';
import { AreaComponent } from '../widget/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardComponent } from '../widget/card/card.component';
import { PieComponent } from '../widget/pie/pie.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent


  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule

    
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent
  ]
})
export class ShardModule { }
