import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  animals:string[]
  length: number
  totalLength: number = 0
  show=true;

  constructor() { 
    this.animals = [];
  }

  addAnimal(animal:any) {
    if (animal.value.length > 0) {
      console.log(animal.value)
      this.animals.push(animal.value);
      animal.value="";
      this.getLastLength();
      this.calcTotalLength();
      animal.focus();
      this.show = true
    }
    return false;
  }

  getLastLength()  {
    this.length = this.animals[this.animals.length-1].length;
  }

  calcTotalLength()  {
    console.log("calcTotalLength called")
    this.totalLength += this.length;
  }

  ngOnInit() {
  }

}
