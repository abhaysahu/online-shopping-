import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


declare const $;

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {


  user: any[];
  user$;

  constructor(
    private userService: UserService
  ) { 

    this.user$ = this.userService.getAll()

    this.userService.getAll().subscribe(user => {
      this.user = user
      console.log(this.user)
    })
  }

  ngOnInit(): void {

    setTimeout (() => {
      $(function () {
        $('#example').DataTable( {
        
      } );
      });
   }, 1000);


  }

}
