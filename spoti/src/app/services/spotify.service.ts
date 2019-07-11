import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  search_url : string = ""

  constructor(private http : HttpClient)
  {  

  }

  getReleases()
  {
    const headers  = new HttpHeaders({
      'Authorization': 'Bearer BQDHestGtziYRD0D2uoJ3DZAxyW2lx3NYzUNTys3EQuwMVJ8qUCLzrRVqDH1Sj2El1PVg-5MPAfNXSTHb7M'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers})
  }

  searchAlbums(termInput: any, typeInput: any)
  { 
    const headers  = new HttpHeaders({
      'Authorization': 'Bearer BQBZ2N9AY4Eg7TeTYCOmKog6b7TEdgYlIILO17S0Wa_C65snB8bYxbXne4IixOebgs7UmNyTdswzo71ajP8'
    })
    console.log("Term = " + termInput.value);
    this.search_url = 'https://api.spotify.com/v1/search?q=' + termInput.value + '&type=' + typeInput.value
    console.log(this.search_url);
    return this.http.get(this.search_url, {headers})
  }
}
