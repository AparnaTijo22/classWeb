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
    gst: 40,
    // image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwEREEDqKLKxGzNMqFPbrdKqYhbjfJ0fi591eYGZ0&s",
    image: "./assets/mobilePhoneA.jpg"
  }

  calculatePrice(){
    return this.product.price + this.product.gst
  }
}

