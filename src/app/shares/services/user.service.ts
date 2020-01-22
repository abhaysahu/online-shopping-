import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';
import { AppUser } from '../models/app-user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User){

    this.db.object('/users/' + user.uid).subscribe (data => {
      if(data.status)
      {
        console.log("yes");
      }

      else
      {
        console.log("no")
      }

    })

    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email,
      image: user.photoURL,
      dataCreated: new Date().getTime()
    });
  }

  get(uid: string): FirebaseObjectObservable<AppUser>
  {
    return this.db.object('/users/' + uid);
  }

  update(uid, user)
  {
    return this.db.object('/users/' + uid).update(user)

  }

  getAll()  {
    return this.db.list('/users');
  }

}
