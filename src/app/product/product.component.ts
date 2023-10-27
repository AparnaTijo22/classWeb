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
    image: "./assets/mobilePhoneA.jpg",
    inStock: 0,
    // inStock: 6,
  }
  quantity = 0;

  calculatePrice(){
    return this.product.price + this.product.gst
  }

  increaseQuantity(){
    if(this.quantity<this.product.inStock) this.quantity++;
  }

  decreaseQuantity(){
    if(this.quantity>0) this.quantity--;
  }

  changeproductname(){
    this.product.name = "Google Pixel 6";
  }
  
  changeproductname2(){
    this.product.name = "Motorola Edge 40";
  }

  applyStyle(){
    let styles = {
      'color': 'white',
      'background-color': 'green'
    }
    return styles
  }

  reviewList = [
    {name: "Manoj", review: "Worth it"},
    {name: "Rani", review: "Could have been better"},
    {name: "Ashish", review: "Trash like me"},
    {name: "Raima", review: "..."},
  ]

}

