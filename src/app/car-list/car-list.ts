import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, DatePipe, TitleCasePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { TextPipe } from '../pipes/text.pipe';

@Component({
  selector: 'app-car-list',
  imports: [FormsModule, CurrencyPipe, DatePipe, TitleCasePipe, LowerCasePipe, UpperCasePipe, TextPipe],
  templateUrl: './car-list.html',
  styleUrl: './car-list.css'
})
// one way data binding
// two way data binding

export class CarList implements OnInit {
  carName: string = 'Bmw'
  carYear: Date = new Date()

  amount = 123.45;
  company = 'acme corporation';
  purchasedOn = '2024-07-08';

  cars: Car[] = [
    { id: 1, name: 'Bmw', year: new Date() },
  ]

  ngOnInit(): void {
    const savedCars = localStorage.getItem('cars')
    savedCars ? this.cars = JSON.parse(savedCars) : this.cars = []
  }
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
      localStorage.setItem('cars', JSON.stringify(this.cars))
    }
  }
  onDelete(car: Car) {
    this.cars = this.cars.filter(c => c.id != car.id)
    localStorage.setItem('cars', JSON.stringify(this.cars))
  }
}
