import { Component } from '@angular/core';
import { Car } from '../models/car';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-car-list',
  imports: [FormsModule],
  templateUrl: './car-list.html',
  styleUrl: './car-list.css'
})
// one way data binding
// two way data binding

export class CarList {
  carName: string = 'Bmw'
  carYear: Date = new Date()

  cars: Car[] = [
    { id: 1, name: 'Bmw', year: new Date() },
  ]

  onSubmit() {
    if (this.carName.length != 0 && this.carYear) {
      const newCar: Car = {
        id: this.cars.length + 1,
        name: this.carName,
        year: this.carYear
      }
      this.cars.push(newCar)
      this.carName = ''
      this.carYear = new Date()
      console.log(this.cars);
      
    }
  }
}
