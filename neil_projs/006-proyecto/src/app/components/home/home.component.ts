import { Component, OnInit } from '@angular/core';
import { CallsService } from '../../services/calls.service';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  paises: any []= []
  regionTitulo: string;
  constructor( private router:Router, 
    private _callsService:CallsService,
    private activateRoute: ActivatedRoute) {
    this.activateRoute.params
    .subscribe(params=>this.callByRegion(params.reg))
    
   }

  ngOnInit() {
  }

  callByRegion(region:string){
    this._callsService.getByRegion(region).subscribe(
      (resp:any)=>{this.paises=resp}
      );
      this.regionTitulo=region;
  }

  verPais(codPais:string){
    this.router.navigate(['/detail',codPais]);
  }

}
