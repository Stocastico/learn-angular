import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-component',
  templateUrl: './third-component.component.html',
  styleUrls: ['./third-component.component.css']
})
export class ThirdComponentComponent {

  cities: string[] = ['London', 'Paris', 'Berlin'];

  addCity(city) {
    console.log(city.value)
    this.cities.push(city.value);
    city.value="";
    city.focus();
    return false;
  }

}
