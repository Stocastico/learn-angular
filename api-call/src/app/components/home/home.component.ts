import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent  {

  countries : any[] = []

  constructor(private http: HttpClient) {
    this.http.get('https://restcountries.eu/rest/v2/currency/eur').subscribe(
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
