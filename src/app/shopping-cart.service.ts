import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Product } from './models/product';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import { ShoppingCart } from './models/shopping-cart';
import { Observable } from 'rxjs/Observable';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  products: any = {};

  
  static getCart(): any {
    throw new Error("Method not implemented.");
  }

  constructor(private db: AngularFireDatabase,
    private productService: ProductService
    ) { }

  async getCart(): Promise<Observable<ShoppingCart>> {
    let cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/' + cartId
    )
      .map(x => new ShoppingCart(x.items));
  }

  // async getCartHindi(): Promise<Observable<ShoppingCart>> {
  //   let cartId = await this.getOrCreateCartId();
  //   return this.db.object('/shopping-carts/' + cartId
  //   )
  //     .map(x => new ShoppingCart(x.itemsorders));
  // }

  async addToCart(product: Product) {

    this.productService.getBoth(product.$key).take(1).subscribe(products => {
      this.products = products
      this.updateItem(this.products, 1)
      //this.updateItemStock(this.products, -1)
    })


    this.productService.getBoth(product.$key).take(1).subscribe(products => {
     
      this.products = products
      this.products.name = this.products.nameH
      this.products.title = this.products.titleH

      //this.updateItemOrderStock(this.products, -1)
    })

  }

  async removeFromCart(product: Product){


    this.productService.getBoth(product.$key).take(1).subscribe(products => {
      this.products = products
      this.updateItem(this.products, -1)
      //this.updateItemStock(this.products, 1)
    })
    
  }

  async clearCart(){
    let cartId = await this.getOrCreateCartId();
    this.db.object('/shopping-carts/' + cartId + '/items').remove();
    this.db.object('/shopping-carts/' + cartId + '/itemsorders').remove();
  }

  updateItemStock(product, change: number)
  {
    
    product.stock = product.stock + change
    this.productService.updateBoth(product.$key, product)
    console.log("English")
  }

  updateItemOrderStock(product, change: number)
  {
    product.stock = product.stock + change
    this.productService.updateBoth(product.$key, product)
    console.log("hindi")
  }
 

  private create(){
    return this.db.list('/shopping-carts').push({
      dataCreated: new Date().getTime()
    });
  }

  
  private getItem(cartId: string, productId: string)
  {

    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }

  private getItemorder(cartId: string, productId: string)
  {
    return this.db.object('/shopping-carts/' + cartId + '/itemsorders/' + productId);
  }



  private async getOrCreateCartId(): Promise<string>{
    let cartId = localStorage.getItem('cartId');
    if (cartId) return cartId;

      let result = await this.create();
      localStorage.setItem('cartId', result.key);
      return result.key;
     }

  

  private async updateItem(product, change: number){
    let cartId = await this.getOrCreateCartId();
    let item$ = this.getItem(cartId, product.$key);
    item$.take(1).subscribe(item => {
  
      let quantity = (item.quantity || 0) + change 
      if(quantity === 0) item$.remove();
      else item$.update({ 
        //product: product,
        titleH: product.titleH,
        title: product.title,
        imageUrl: product.imageUrl,
        price: (product.price - (product.price * product.offer/100)),
        code: product.code,
        quantity: quantity,
        offer: product.offer,
      }); 
    });  
  }


}
