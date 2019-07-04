import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  @Output() regionSelected: EventEmitter<string>;
  regions : any[] = []
  currentRegion : string = ""

  constructor(private http: HttpClient) {
    this.http.get('https://restcountries.eu/rest/v2/all?fields=region').subscribe(
      (response : any) => { 
        response.forEach( country => {
          if (!this.regions.includes(country.region)) {
            console.log(country.region)
            this.regions.push(country.region)
          }
        });
        this.currentRegion = this.regions[0]
        this.seeRegion(this.currentRegion)
      }
    )
  }

  ngOnInit() {
    
  }

  seeRegion(reg : string) {
    this.regionSelected.emit(reg)
  }

}
