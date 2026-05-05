import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import storage from 'simple-package-by-ramuu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  products = [
    { id: 1, name: 'Laptop', price: 50000 },
    { id: 2, name: 'Mobile', price: 20000 },
    { id: 3, name: 'Headphones', price: 2000 },
    { id: 4, name: 'Watch', price: 3000 }
  ];

  cart: any[] = [];



  addToCart(product: any) {
    if (!this.isAdded(product)) {
      this.cart.push(product);
    }
  }

  isAdded(product: any): boolean {
    return this.cart.some(item => item.id === product.id);
  }

  username: string = '';
  showProducts = false;
  doLogin() {
    this.showProducts = true;
  }
  submit() {
    storage.set(this.username, JSON.stringify(this.cart));
    alert('Cart saved successfully!');
  }
}
