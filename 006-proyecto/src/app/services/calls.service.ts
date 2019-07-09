import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallsService {
  
  constructor(private http: HttpClient) {console.log("works");

}

  getByRegion(region:string):Observable<any>{
    return this.http.get('https://restcountries.eu/rest/v2/region/'+region);
  }

  getCountry(pais:string):Observable<any>{
    return this.http.get('https://restcountries.eu/rest/v2/alpha/'+pais);
  }

  getNameAndCapital():Observable<any>{
    return this.http.get('https://restcountries.eu/rest/v2/all?fields=name;capital');
  }

  
    
}
