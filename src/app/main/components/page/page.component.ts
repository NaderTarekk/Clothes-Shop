import { Component } from '@angular/core';
import { SharedServiceService } from 'src/app/shared/shared-service.service';
import { ShopServiceService } from '../shop-service.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {
  constructor(private api: ShopServiceService, private sharedService: SharedServiceService) {
    this.getFeaturedProducts()
  }

  FeaturedProducts: any[] = []
  cartProducts: any[] = []
  quantity: any = 1

  // on click heart
  heartClick() {

  }

  //get products
  getFeaturedProducts() {
    this.api.getProducts().subscribe((res: any) => {
      this.FeaturedProducts = res.slice(0, 8)
    })
  }

  // add to cart 
  addToCart(event: any) {
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
      let exist = this.cartProducts.find(product => product.item.id == event.id)
      if (exist) {
        alert("this item already in your cart!")
        console.log(event);
      } else {
        this.cartProducts.push({ item: event, quantity: this.quantity })
        localStorage.setItem("cart", JSON.stringify(this.cartProducts))
        this.sharedService.cart.next(this.cartProducts.length)
      }
    } else {
      this.cartProducts.push({ item: event, quantity: this.quantity })
      localStorage.setItem("cart", JSON.stringify(this.cartProducts))
      this.sharedService.cart.next(this.cartProducts.length)
    }
  }
}