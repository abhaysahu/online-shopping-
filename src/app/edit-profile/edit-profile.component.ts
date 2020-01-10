import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shares/services/auth.service';
import { AppUser } from '../models/app-user';
import { UserService } from '../shares/services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {



  user: any={}
  appUser: AppUser;


  constructor( 
    private auth: AuthService,
    private userService: UserService
     ) {

    this.auth.appUser$.subscribe(appUser => {
      this.appUser = appUser
      console.log(appUser.$key)

    });
   }



  save(user)
  {
    this.userService.update(this.appUser.$key, user)
    
  }

  ngOnInit() {

    
  }

}
