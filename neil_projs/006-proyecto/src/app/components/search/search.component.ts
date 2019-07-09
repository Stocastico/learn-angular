import { Component, OnInit } from '@angular/core';
import { CallsService } from '../../services/calls.service';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  paises: any []= [];
  regionTitulo: string;
  termBuscar: string;
  constructor( private router:Router, 
    private _callsService:CallsService,
    private activateRoute: ActivatedRoute) {
    this.activateRoute.params
    .subscribe(params=>{this.callByRegionAndTerm(params.termino, params.region)})
    
   }

  ngOnInit() {
  }

  callByRegionAndTerm(term:string, reg:string){
    this.termBuscar=term;
    this.regionTitulo=reg;
    term = term.toLowerCase();
    let regionFiltrada: any []= []
    let paisesFiltrados: any []= []

    if (term.length==0) return;
    this._callsService.getByRegion(reg).subscribe(
      (resp:any)=>{regionFiltrada=resp;
        for(let i=0;i<regionFiltrada.length;i++){
          regionFiltrada[i].name = regionFiltrada[i].name.toLowerCase();
          if(regionFiltrada[i].name.indexOf(term)>=0){
            paisesFiltrados.push(regionFiltrada[i]);
          }
            this.paises=paisesFiltrados;
        }
      
      }
      );
     
      
      
  }

  

  verPais(codPais:string){
    this.router.navigate(['/detail',codPais]);
  }

}