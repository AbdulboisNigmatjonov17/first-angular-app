import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarList } from "./car-list/car-list";
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CarList, CurrencyPipe],
  templateUrl: './app.html',
})
export class App {
  count = signal(0);

  constructor() {
    effect(() => console.log('count', this.count()))
  }
  increment() {
    this.count.set(this.count() + 1);
  }
  decrement() {
    this.count.set(this.count() - 1);
  }
  reset() {
    this.count.set(0);
  }
}
// signal() - Qiymat saqlidi,
// computed() - Signal asosida avtomatik hisoplangan qiymat,
// effect() - Signal ozgarishlarini kuzatadi va qayta ishlidi.