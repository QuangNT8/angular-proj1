import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();
  
  checkoutForm = this.fromBuilder.group({
      name : '',
      address : '',
      phone : ''
  });

  constructor(
      private cartService : CartService, 
      private fromBuilder : FormBuilder
  ) { }
  
  ngOnInit(): void {
  }

  onSubmit(): void{
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    window.alert('Your order has been submitted');
    this.checkoutForm.reset();
  }
}
