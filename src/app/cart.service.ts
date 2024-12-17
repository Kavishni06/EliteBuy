import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  itemsSource=new BehaviorSubject([]);
  currentItems=this.itemsSource.asObservable()
  cartItems:any=[];
  constructor() { }


  addItem(newCartItem:any){

    const prevCartItem=this.cartItems.find((e1:any)=> e1.product._id == newCartItem.product._id)
    
    if(prevCartItem){
       //update item qty
       this.cartItems=this.cartItems.map((item:any) => {
         if(item.product._id == prevCartItem.product._id){
          item.qty=item.qty+1;
         }
         return item;
    })
  }else{
    
    this.cartItems.push(newCartItem);
    }
    this.itemsSource.next(this.cartItems);
  }
   
    updateItems(items:[]){
      this.cartItems = items;
      this.itemsSource.next(this.cartItems);
    }
}
