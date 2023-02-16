import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedServiceService } from 'src/app/shared/shared-service.service';
import { ShopServiceService } from '../../shop-service.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

  constructor(private router: Router, private sharedService: SharedServiceService, private service: ShopServiceService, private fb: FormBuilder) {
    this.Form = fb.group({
      fName: ['', Validators.required],
      lName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address1: ['', Validators.required],
      address2: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      createAccount: ['', Validators.required],
    })
  }
  
  Form!: FormGroup
  
  order() {
    this.service.customerInfo(this.Form.value).subscribe(data => {
      alert("successfulyy process ✔")
      this.router.navigateByUrl("/shoppingCart")
      // delete checkout from navbar
      this.sharedService.checkout.next(true)
    })
  }
}