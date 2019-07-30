import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-form',
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.css']
})
export class NameFormComponent implements OnInit {

  _name:string = "Ste";
  _age:number = 11;

  addName(name) {
    this._name = name.value;
    return false;
  }

  addAge(age) {
    this._age = age.value;
    return false;
  }
  constructor() { }

  ngOnInit() {
  }

}
