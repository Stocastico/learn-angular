import { Component,  } from '@angular/core';
import { CarsService } from "../../services/cars.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-lista-cars',
  templateUrl: './lista-cars.component.html'
})
export class ListaCarsComponent  {
  cars: any = [];
    constructor( private _carsService: CarsService,
                private activatedRoute: ActivatedRoute) {
                 this.activatedRoute.params.subscribe(
                    params => {
                       //this.cars = this._carsService.getCars(); }
                       this.cars = this._carsService.buscarCars(params.termino,params.precio,params.garantia, params.cambio); }
                  )
                 

                    }       

}
