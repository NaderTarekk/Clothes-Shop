import { Component } from '@angular/core';
import { ShopServiceService } from '../shop-service.service';

class Prices {
  price!: number
  isSelected!: boolean
  length!: number
}

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  constructor(private api: ShopServiceService) {
    this.getProducts()

    this.prices = [
      {
        price: 100,
        isSelected: false,
        length: this.filterProductsLength
      },
      {
        price: 150,
        isSelected: false,
        length: this.filterProductsLength
      },
      {
        price: 200,
        isSelected: false,
        length: this.filterProductsLength
      }
    ]
  }

  products: any[] = []
  products2: any[] = []
  filterProductsLength: number = 12
  prices!: Prices[]
  row: boolean = true
  page: number = 1
  count: number = 0
  tableSize: number = 3

  //get products from api
  getProducts(): any {
    this.api.getProducts().subscribe((data: any) => {
      this.products = data
      this.products2 = data
    })
  }

  // change price
  onChange(event: any) {
    if (event.target.checked) {
      this.products = this.products2.filter((item: any) => item.price <= event.target.value)
      this.filterProductsLength = this.products.length
    }
    else {
      this.products = this.products2
      this.filterProductsLength = this.products.length
    }
  }

  // pagintation
  onTableDataChange(event: any) {
    this.page = event
    this.getProducts()
  }
}
