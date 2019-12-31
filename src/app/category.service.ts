import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getAllEnglish(){
    return this.db.list('/categories/English', {
      query: {
        orderByChild: 'name'
      }
    });
  }


  getAllHindi(){
    return this.db.list('/categories/Hindi', {
      query: {
        orderByChild: 'name'
      }
    });
  }
}
