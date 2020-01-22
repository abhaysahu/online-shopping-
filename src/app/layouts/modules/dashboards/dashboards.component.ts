import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { AppUser } from 'src/app/shares/models/app-user';
import { UserService } from 'src/app/shares/services/user.service';




export interface PeriodicElement {
  name: string;
  email: string;
  number: number;
}



@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css']
})
export class DashboardsComponent implements OnInit {

  bigChart = [];
  cards = [];
  pieChart = [];

  user: any[];
 



  displayedColumns: string[] = [ 'name', 'number', 'email'];
  dataSource = new MatTableDataSource<PeriodicElement>(this.user);

  @ViewChild(MatPaginator) paginator: MatPaginator;



  constructor(private dashboardService: DashboardService, private userService: UserService) { 

    this.userService.getAll().subscribe(user => {
      this.user = user
      this.dataSource = new MatTableDataSource<PeriodicElement>(this.user);
    })
  }

  ngOnInit() {

    this.userService.getAll().subscribe(user => {
      this.user = user
      this.dataSource = new MatTableDataSource<PeriodicElement>(this.user);

      setTimeout(() => this.dataSource.paginator = this.paginator);
    })

    this.bigChart = this.dashboardService.bigChart()
    this.cards = this.dashboardService.cards()
    this.pieChart = this.dashboardService.pieChart()

  }

}
