import { Component } from '@angular/core';
import { SharedServiceService } from '../../shared-service.service';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent {

  constructor(private service: SharedServiceService) {
    service.cart.subscribe({
      next: res => {
        this.cartNumber = res
      }
    })

    service.checkout.subscribe({
      next: res => {
        this.checkouted = res
      }
    })
  }

  cartNumber: number = 0
  checkouted!: boolean
}
