import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavbarComponent } from './shared/components/top-navbar/top-navbar.component';
import { MainNavbarComponent } from './shared/components/main-navbar/main-navbar.component';
import { PageComponent } from './main/components/page/page.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ShopComponent } from './main/components/shop/shop.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './main/components/contact/contact.component';
import { ShoppingCartComponent } from './main/components/cart/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './main/components/cart/checkout/checkout.component';
import { ProductDetailsComponent } from './main/components/product-details/product-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    MainNavbarComponent,
    PageComponent,
    FooterComponent,
    ShopComponent,
    ContactComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
