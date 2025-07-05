import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarList } from "./car-list/car-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CarList],
  template: `<app-car-list></app-car-list>
  <h3 class="paragraph">Hello ddim sanga</h3>`,
})
export class App {
  protected title = 'angular-app';
}
