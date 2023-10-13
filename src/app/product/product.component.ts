import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  // name = "Motorola Edge 40"
  product = {
    name: "Motorola Edge 40",
    price: 32000,
    gst: 40
  }

  calculatePrice(){
    return this.product.price + this.product.gst
  }
}

