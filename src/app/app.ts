import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarList } from "./car-list/car-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CarList],
  templateUrl: './app.html',
})
export class App {
  count = signal(0)

  readonlyCount = this.count.asReadonly()

  increment() {
    this.count.update(value => value + 1)
  }
  decrement() {
    this.count.update(value => value - 1)
  }
  reset() {
    this.count.set(0)
  }
}
