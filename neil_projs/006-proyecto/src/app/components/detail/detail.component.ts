import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { CallsService } from "../../services/calls.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styles: []
})
export class DetailComponent implements OnInit {
  pais: any = {};
  languages: any = {};
  currencies: any = {};
  constructor(private router:Router, 
              private activateRoute:ActivatedRoute,
              private _callsService: CallsService) { 
                this.activateRoute.params.subscribe(
                  (params) => { 
                    this._callsService.getCountry(params.codPais).subscribe((resp:any)=>
                    {this.pais=resp;
                      this.languages=resp.languages[0];
                      this.currencies=resp.currencies[0];});
                    
                  }
                );
              }

  ngOnInit() {
  }

}
