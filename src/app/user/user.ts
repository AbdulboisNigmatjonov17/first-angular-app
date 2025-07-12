import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../interfaces';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})

export class UserComponent {
  @Input() userName: string = ''
  @Input() users: IUser[] = []
  @Output() deleteUserEvent = new EventEmitter<IUser>();

  onDelete(user: IUser) {
    this.deleteUserEvent.emit(user)
  }
}

