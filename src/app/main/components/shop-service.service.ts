import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopServiceService {

  constructor(private http: HttpClient) {
    this.getProducts().subscribe((data: any) => {
      this.allProducts = data
    })
  }

  allProducts: any[] = []

  // get all products
  getProducts(): any {
    return this.http.get("http://localhost:3000/ProductsList")
  }

  // find Featured Products by id
  findFeaturedProductsById(id: any) {
    return this.http.get("http://localhost:3000/ProductsList/" + id)
  }

  // send checkout to api
  postProducts(products: any) {
    return this.http.post("http://localhost:3000/checkout", products)
  }

  // post customer information 
  customerInfo(data: any) {
    return this.http.post("http://localhost:3000/customerInfo", data)
  }

  // post customer Email to contact 
  customerEmail(data: any) {
    return this.http.post("http://localhost:3000/Email", data)
  }

  // filter products by price
  filterProductsByPrice(number: any) {
    return this.allProducts.filter((item: any) => item.price <= number)
  }
}
