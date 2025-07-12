import { Component } from '@angular/core';
import { UserComponent } from './user/user';

@Component({
  selector: 'app-root',
  imports: [UserComponent],
  templateUrl: './app.html',
})
export class App {

}