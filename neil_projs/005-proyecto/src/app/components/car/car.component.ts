import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input() car: any = {};
  @Output() carSelected: EventEmitter<number>;

  constructor() { 
    this.carSelected = new EventEmitter();
  }

  ngOnInit() {
  }

  verCar(i:number) {
    //this.router.navigate(['/car-detail',i]);
    this.carSelected.emit(i);
  }

}
