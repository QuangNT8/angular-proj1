import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAlertsComponent } from './components/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { Example1Component } from './components/example1/example1.component';
import { Example2Component } from './components/example2/example2.component';
import { AdBannerComponent } from './components/ad-banner/ad-banner.component';
import { AdDirective } from './controllers/ad.directive';
import { HeroJobAdComponent } from './components/hero-job-ad/hero-job-ad.component';
import { HeroProfileAdComponent } from './components/hero-profile-ad/hero-profile-ad.component';
import { AdService } from './services/ad.service';
import { Example3Component } from './components/example3/example3.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
      { path: 'ex1', component: Example1Component },
      { path: 'ex2', component: Example2Component },
      { path: 'ex3', component: Example3Component },
    ])
  ],
  providers: [ AdService ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    Example1Component,
    Example2Component,
    AdBannerComponent,
    AdDirective,
    HeroJobAdComponent,
    HeroProfileAdComponent,
    Example3Component,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/