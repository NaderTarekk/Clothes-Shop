import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ShopServiceService } from '../shop-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(private fb: FormBuilder, private service: ShopServiceService) {
    this.Form = fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    })
  }

  Form!: FormGroup
  sent: boolean = false

  get Name() {
    return this.Form.get("name")
  }
  get Email() {
    return this.Form.get("email")
  }
  get Message() {
    return this.Form.get("message")
  }

  // on send message
  SendMessage() {
    this.service.customerEmail(this.Form.value).subscribe(data => {
      this.sent = true
    })
  }
}