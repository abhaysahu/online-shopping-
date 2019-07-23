import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  //create the product part.
 

  createBoth(product,key)
  {
    const toSend = this.db.object(`/product/both/${key}`)
    toSend.set(product);
  }
  



  //get all the data from  product in hindi or english.

  getAll()
  {
    return this.db.list('/product/english');
  }


  getAllBoth()
  {
    return this.db.list('/product/both');
  }


  getBoth(productId)
  {
    return this.db.object('/product/both/' + productId)
  }


  updateBoth(productId,product){
    return this.db.object('/product/both/' + productId).update(product);
  }


  deleteBoth(productId)
  {
    return this.db.object('/product/both/' + productId).remove();
  }

}
