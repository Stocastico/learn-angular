import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CarsService } from "../../services/cars.service";

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  carDetail: any={};
  constructor(private activateRoute: ActivatedRoute, private _carService: CarsService) { 
    this.activateRoute.params.subscribe( params => {this.carDetail = this._carService.getCar(params['id']);})
    
  }

  ngOnInit() {
  }

}
