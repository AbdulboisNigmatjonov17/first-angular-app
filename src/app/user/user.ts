import { Component, computed, EventEmitter, Input, Output, signal } from '@angular/core';
import { IUser } from '../interfaces';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})

export class UserComponent {
  private _name = signal('');

  @Input()
  set nameInput(value: string) {
    this._name.set(value)
  }

  name = computed(() => this._name())
}

