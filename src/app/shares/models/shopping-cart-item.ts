import { Product } from './product';

export class ShoppingCartItem {
    $key: string;
    title: string;
    imageUrl: string;
    price: number; 
    code: string;
    quantity: number;
    weight: string;


    constructor(init ? : Partial<ShoppingCartItem>) {
        Object.assign(this, init);
    }



    get totalPrice() { return this.price * this.quantity; }
}