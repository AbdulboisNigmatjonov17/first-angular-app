import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarList } from "./car-list/car-list";
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CarList, CurrencyPipe],
  templateUrl: './app.html',
})
export class App {
  price = signal(100);

  tax = computed(() => this.price() * 0.2);
  totalPrice = computed(() => this.price() + this.tax());

  applyDiscount() {
    const discount = this.price() * 0.1;
    this.price.set(this.price() - discount);
  }
}
