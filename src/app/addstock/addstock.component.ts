import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-addstock',
  templateUrl: './addstock.component.html',
  styleUrls: ['./addstock.component.css']
})
export class AddstockComponent implements OnInit {

  // constructor(private db: AngularFireDatabase) {
  //   this.db.list('/orders', {
  //     query: {
  //       orderByChild:'userId',
  //       equalTo: 't30f7zxWYDUNWoxioKENWKwaknA3'
  //     }
  //   }).subscribe(data=>{
  //     console.log(data) 
  //   })
  //   console.log("abhay sahu")
  //  }

  ngOnInit() {
  }

}
