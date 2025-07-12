import { Component, signal, effect } from '@angular/core';
import { UserComponent } from './user/user';
import { Comments } from './comments/comments';
import { Article } from './article/article';

@Component({
  selector: 'app-root',
  imports: [UserComponent, Comments, Article],
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

// @defer - Bu asosiy block. Component ni kechiktirib yuklaydi.
// @placeholder - Yuklash vaqtidan oldn ko'rsatiladigan joy.
// @loading - Yuklanayotgan paytda ko'rsatiladigan joy.