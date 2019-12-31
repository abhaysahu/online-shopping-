import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { AuthService } from '../auth.service';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  

  constructor(private db: AngularFireDatabase, public auth: AuthService) {

  }

  login() 
  {
    this.auth.login();
  }


  loginFaceBook()
  {
    this.auth.loginFaceBook();

  }

}
