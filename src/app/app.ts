import { Component, } from '@angular/core';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  imports: [User],
  template: `<section>
    <app-user [userName]="userName"></app-user>
  </section>`,
})
export class App {
  userName: string = 'CostaRICO'
}