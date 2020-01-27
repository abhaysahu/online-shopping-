import { Component } from '@angular/core';
import { AuthService } from './shares/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from './shares/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userService: UserService, private auth: AuthService, router: Router){
    auth.user$.subscribe(user => {
      if(!user) return;
       

      userService.status(user).subscribe(data => {
        console.log(data)
        if(data.$value)
        {
          console.log("yes")
        }
        else
        {
          if(data.status)
          {
            console.log("function")

          }
          else
          {
            console.log("log out")
          }
        }
      })


        userService.save(user);

        let returnUrl = localStorage.getItem('returnUrl');
        if(!returnUrl) return;
        
          localStorage.removeItem('returnUrl');
           router.navigateByUrl(returnUrl);
           

    });

  }
  
}



// var user = firebase.auth().currentUser;
  
//     user.delete().then(data =>{
//       console.log("yes");
//     }).catch (function(error) {
//       console.log(error)
//     })
