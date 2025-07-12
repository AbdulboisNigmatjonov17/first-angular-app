import { Component, } from '@angular/core';
import { UserComponent } from './user/user';
import { IUser } from './interfaces';

@Component({
  selector: 'app-root',
  imports: [UserComponent],
  template: `<section>
    <app-user [userName]="userName" [users]="users" (deleteUserEvent)="deleteUser($event)"></app-user>
  </section>`,
})
export class App {
  userName: string = 'CostaRICO'

  users = [
    { name: 'CostaRICO', age: 30, id: 1 },
    { name: 'Kortu', age: 25, id: 2 },
    { name: 'Karl ONE', age: 15, id: 3 },
  ]
  deleteUser(user: IUser) {
    // console.log('data from child to parent', user);
    this.users = this.users.filter(u => u.id != user.id)
  }
}