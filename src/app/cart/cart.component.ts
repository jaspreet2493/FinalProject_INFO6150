import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, OnDestroy, Input,  EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AuthService } from '../_services/auth.service';
// import {AuthService} from 'src/app/_services/auth.service';
import { CartItem } from './cart.model';
declare const Stripe;


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  paymentHandler: any = null;
  total: number = 0;
  @Input() cartTotal: number;
  @Input() cartItems: CartItem[];
  @Output() cartItemDeleted = new EventEmitter<{
    productId: number
  }>();
  @Output() cartItemChanged = new EventEmitter<{
    productId: number
  }>();  

  onCartItemDeleted(productData:{productId: number}) {
    this.cartItemDeleted.emit({
        productId: productData.productId
      });    
  }

  onCartItemChanged(productData:{productId: number}) {
    this.cartItemChanged.emit({
        productId: productData.productId
      });    
  }

  // constructor(private http: HttpClient,private authService: AuthService) {
   
  // }
  constructor(private authService: AuthService, private http: HttpClient) { }
  handler:any = null;
 
  ngOnInit() {
    this.loadStripe();
  }
  
  
  pay(amount) {    
  
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51KrvpxEzgKwEXW8k5mK3d4Mwc2y5hOD2N9p5zFd0nCZ1EKlLFdzKultSwMnZmVVAB47CUYNXV6KHuXMHO7oXIL3e006sGZzB2L',
      locale: 'auto',
      token: (token: any) =>{
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        paymentStripe(token)
      }
    });

    const paymentStripe = (token : any ) => {
      this.authService.confirmPayment(token).subscribe( (data : any ) =>{
        alert("Payment successfull")
      })
    }
  
    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: amount * 100
    });
  
  }
  
  loadStripe() {
      
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            // this.confirmPayment(token);
            // alert('Payment Success!!');
          }
        });
      }
        
      window.document.body.appendChild(s);
    }
  }
  confirmPayment(payment:any): void {
  this.authService.confirmPayment(payment).subscribe({
    next: data => {
      alert("payment successful")
    },
    error: err => {
      alert("payment failed")
    }
  });
}

  // requestMemberSession(priceId: number): void {
  //   this.http
  //     .post(baseUrl + 'payment', {
  //       priceId: priceId,
  //       // successUrl: environment.successUrl,
  //       // failureUrl: environment.cancelUrl,
  //     })
  //     .subscribe((session) => {
  //       this.redirectToCheckout(session);
  //     });
  // }

  // redirectToCheckout(sessionId:any) {
  //   const stripe = Stripe("pk_test_51KrvpxEzgKwEXW8k5mK3d4Mwc2y5hOD2N9p5zFd0nCZ1EKlLFdzKultSwMnZmVVAB47CUYNXV6KHuXMHO7oXIL3e006sGZzB2L");

  //   stripe.redirectToCheckout({
  //     sessionId: sessionId,
  //   });
  // }

}
