import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  animals:string[]
  length: string
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
      animal.focus();
    }
    return false;
  }

  getLastLength()  {
    var len = this.animals[this.animals.length-1].length
    this.length = "The length of this animal is " + len;
  }

  calcTotalLength()  {
    console.log("calcTotalLength called")
    var i:number; 
    var total = 0; 

    for(i = 0; i<this.animals.length; i++) {
      total += this.animals[i].length;
    }
    this.length = "The total length is " + total;
  }

  ngOnInit() {
  }

}
