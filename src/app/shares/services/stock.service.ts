import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private codes: string

  constructor(private db: AngularFireDatabase) { }


  get(stockId)
  {
    return this.db.object('/product/both/' + stockId)
  }


  getAll()
  {
    return this.db.list('/product/both');
  }


  create(product, key)
  {

    // return this.db.list('/stock').push(product);

    const toSend = this.db.object(`/stock/${key}`);
    toSend.set(product);
  } 


  update(stockId,product){
    return this.db.object('/product/both/' + stockId).update(product);
  }

  
  delete(stockId)
  {
    return this.db.object('/stock/' + stockId).remove();
  }

}
