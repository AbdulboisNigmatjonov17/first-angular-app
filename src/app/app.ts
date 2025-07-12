import { Component, signal, effect } from '@angular/core';
import { UserComponent } from './user/user';

@Component({
  selector: 'app-root',
  imports: [UserComponent],
  templateUrl: './app.html',
})
export class App {
  email = signal('')

  constructor() {
    effect(() => {
      const keyword = this.email()
      if (keyword.length >= 3) {
        console.log(`Search for ${keyword}`);
      }
    })
  }

  onEmailChange(event: Event) {
    const input = event.target as HTMLInputElement
    this.email.set(input.value)
  }
}