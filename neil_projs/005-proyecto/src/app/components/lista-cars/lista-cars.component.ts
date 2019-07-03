import { Component,  } from '@angular/core';
import { CarsService } from "../../services/cars.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: 'app-lista-cars',
  templateUrl: './lista-cars.component.html'
})
export class ListaCarsComponent  {
  cars: any = [];

  constructor(private router: Router, private _carsService: CarsService, private activatedRoute: ActivatedRoute)
  {
    this.activatedRoute.params.subscribe(
      params => {
        this.cars = this._carsService.buscarCars(params.termino,params.precio,params.garantia, params.cambio);
      }
    )
  }

  verCar(i:number)
  {
    console.log(i);
    this.router.navigate(['/car-detail',i]);
  }     

}
