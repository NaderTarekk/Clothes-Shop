import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedServiceService } from 'src/app/shared/shared-service.service';
import { ShopServiceService } from '../../shop-service.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {

  cartProducts: any[] = []
  total: any = 0
  couponDiscount: number = 0
  coupon: string = ''
  couponName: string = 'Your Coupon'
  couponNameColor: string = 'success'
  applyed: boolean = false
  successProcess: boolean = false
  processStatus: string = "success"
  statusResult: string = "Successfully Process ✔"
  applyDisable: boolean = false
  sentSuccessfully: boolean = false

  constructor(private router: Router, private sharedService: SharedServiceService, private service: ShopServiceService) {
    this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
    this.totalPrice()
  }

  // click close to delete product
  deleteProduct(i: any) {
    this.cartProducts.splice(i, 1)
    this.totalPrice()
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
    this.sharedService.cart.next(this.cartProducts.length)
    if (this.coupon == "MULTISHOP" && this.applyed == true) {
      this.applyCoupon()
    } else { }
  }

  // calculate total price 
  totalPrice() {
    this.total = 0
    for (let x in this.cartProducts) {
      this.total += this.cartProducts[x].item.price * this.cartProducts[x].quantity
    }
  }

  // change amount of product
  changeAmount() {
    this.totalPrice()
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
  }

  // add 1 more product 
  add(i: any) {
    this.cartProducts[i].quantity++
    this.totalPrice()
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
  }

  // delete 1 product
  min(i: any) {
    this.cartProducts[i].quantity--
    this.totalPrice()
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
  }

  // apply coupon for discount
  applyCoupon() {
    if (this.coupon == "MULTISHOP") {
      this.couponName = "MULTISHOP"
      this.couponDiscount = this.total * .3
      this.total = this.total - this.couponDiscount
      this.couponNameColor = "success"
      this.applyed = true
      this.applyDisable = true
      console.log(this.cartProducts.length);
    }
    if (this.cartProducts.length == 0 && this.coupon == "MULTISHOP") {
      this.couponName = "No Products to Discount"
      this.couponNameColor = "danger"
      console.log("@");
    } if (this.coupon !== "MULTISHOP") {
      this.couponName = "Incorrect Coupon"
      this.couponNameColor = "danger"
      this.applyed = false
    }
  }

  // checkout products
  checkout() {
    if (this.sharedService.checkout.value == false) {
      alert("you must complete your information first")
      this.router.navigateByUrl("checkout")
    } else {
      if (this.cartProducts.length == 0) {
        this.successProcess = true
        this.processStatus = "danger"
        this.statusResult = "No Products in your Cart !"
      }
      else {
        const data = this.cartProducts.map(item => {
          return { Id: item.item.id, Quantity: item.quantity /*Item: item*/ }
        })
        this.service.postProducts(data).subscribe(res => {
          this.successProcess = true
          this.processStatus = "success"
          this.statusResult = "Successfully Process ✔"
          this.sentSuccessfully = true
        })
      }
    }
  }
}
