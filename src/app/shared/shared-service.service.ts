import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor() {
    // for cart number
    if (localStorage.getItem("cart")) {
      const size = JSON.parse(localStorage.getItem("cart")!)
      this.cart.next(size.length)
    }
  }

  cart: BehaviorSubject<any> = new BehaviorSubject(null)
  checkout: BehaviorSubject<any> = new BehaviorSubject(false)
}
