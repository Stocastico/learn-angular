import { Component, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { CallsService } from '../../services/calls.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent  {

  @Input() region : any
  countries : any[] = []
  regionTitle : string;

  constructor(private router: Router,
              private _callService: CallsService,
              private activateRoute: ActivatedRoute)
  {
    this.activateRoute.params.subscribe(
      params => {
        this.getCountriesList(params.region);
      }
    )
  }

  getCountriesList(region : string)
  {
    this._callService.getByRegion(region).subscribe (
      (response : any) => { 
        this.countries = response 
      }
    );
    this.regionTitle = region;
  }

}
