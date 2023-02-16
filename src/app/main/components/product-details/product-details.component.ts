import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedServiceService } from 'src/app/shared/shared-service.service';
import { ShopServiceService } from '../shop-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  constructor(private active: ActivatedRoute, private api: ShopServiceService, private sharedService: SharedServiceService) {
    this.id = this.active.snapshot.paramMap.get("id")

    this.getProductById()
  }

  id: any
  product: any = {}
  cartProducts: any[] = []
  quantity: number = 1

  // get product
  getProductById() {
    this.api.findFeaturedProductsById(this.id).subscribe(res => {
      this.product = res
    })
  }

  buy(product: any) {
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
      let exist = this.cartProducts.find(item => item.item.id == product.id)
      if (exist) {
        alert("this item already in your cart!")
      } else {
        this.cartProducts.push({ item: product, quantity: this.quantity })
        localStorage.setItem("cart", JSON.stringify(this.cartProducts))
        this.sharedService.cart.next(this.cartProducts.length)
      }
    } else {
      this.cartProducts.push({ item: product, quantity: this.quantity })
      localStorage.setItem("cart", JSON.stringify(this.cartProducts))
      this.sharedService.cart.next(this.cartProducts.length)
    }
  }

}
