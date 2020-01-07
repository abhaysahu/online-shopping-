import { ShoppingCart } from './shopping-cart';

export class Order { 
  dataPlaced: number;
  items: any[] = []; 


    constructor(public userId: string, public shipping: any, shoppingCart: ShoppingCart, public order: any){
        this.dataPlaced = new Date().getTime();
      
        this.items = shoppingCart.items.map(i => {
          //console.log(i);
          if(i.code)
          {
            return {
              product: {
                title: i.title,
                imageUrl: i.imageUrl,
                price: i.price,
                code: i.code,
              },
              quantity: i.quantity,
              totalPrice: i.totalPrice
            }
          }

          else
          {
            return {
              product: {
                price: i.price,
                name: i.name,
                weight: i.weight
              },
              quantity: i.quantity,
              totalPrice: i.totalPrice
            }
          }
          })
    }
}