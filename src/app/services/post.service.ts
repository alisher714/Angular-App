import { Injectable } from '@angular/core';
import { CarType } from '../interface/type';



@Injectable({
  providedIn: 'root'
})
export class PostService {

  Car:Array<CarType> = [
    { name: 'BMW', model: 2022, color: 'Red'},
    { name: 'Audi', model: 2021, color: 'Black'},
    { name: 'Honda', model: 2019, color: 'Green'}
  ]
  constructor() { }

  getpost(){
    return this.Car
  }

  addCarService(newCar:any){
    this.Car.push(newCar)

    console.log(newCar)
  }
}
