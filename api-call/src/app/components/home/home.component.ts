import { Component, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent  {

  @Input() region : any
  countries : any[] = []

  constructor(private http: HttpClient) {
    this.http.get('https://restcountries.eu/rest/v2/all/field='+this.region).subscribe(
      (response : any) => { 
        console.log(response)
        this.countries = response
      }
    )
  }

  seeRegion(reg : string) {
      console.log(reg)
  }

}
