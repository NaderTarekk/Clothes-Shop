import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './main/components/cart/checkout/checkout.component';
import { ShoppingCartComponent } from './main/components/cart/shopping-cart/shopping-cart.component';
import { ContactComponent } from './main/components/contact/contact.component';
import { PageComponent } from './main/components/page/page.component';
import { ProductDetailsComponent } from './main/components/product-details/product-details.component';
import { ShopComponent } from './main/components/shop/shop.component';

const routes: Routes = [
  { path: '', component: PageComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'shoppingCart', component: ShoppingCartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'details/:id', component: ProductDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
