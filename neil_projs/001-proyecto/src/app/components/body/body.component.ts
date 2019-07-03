import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  animals:string []=[];
  longitud:number;
  longitudAnimals:number=0;
  mostrar=true;
  constructor() { }

  ngOnInit() {
  }
  addAnimal(animal:string){
    if(animal.length>0){
    this.animals.push(animal);
    this.longitud=animal.length;
    this.longitudAnimals=0;
    for (let i=0;i<this.animals.length;i++){
      this.longitudAnimals =  this.longitudAnimals + this.animals[i].length;
    }
  }
  return false;
  }
}
