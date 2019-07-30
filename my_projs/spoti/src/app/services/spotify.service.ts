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
      'Authorization': 'Bearer BQACByMiQb3ahI0JGMAbp39vWAeiGhVI6fxEo8_i_cOr3dyeskNahkXJFepkiD3axzqo623hymMWtDiMajw'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers})
  }

  search(termInput: any, typeInput: any)
  { 
    const headers  = new HttpHeaders({
      'Authorization': 'Bearer BQACByMiQb3ahI0JGMAbp39vWAeiGhVI6fxEo8_i_cOr3dyeskNahkXJFepkiD3axzqo623hymMWtDiMajw'
    })
    this.search_url = 'https://api.spotify.com/v1/search?q=' + termInput.value + '&type=' + typeInput.value
    return this.http.get(this.search_url, {headers})
  }

  searchArtist(artistId: string) {
    const headers  = new HttpHeaders({
      'Authorization': 'Bearer BQACByMiQb3ahI0JGMAbp39vWAeiGhVI6fxEo8_i_cOr3dyeskNahkXJFepkiD3axzqo623hymMWtDiMajw'
    })
    this.search_url = 'https://api.spotify.com/v1/artists/' + artistId + '/top-tracks?country=ES'
    return this.http.get(this.search_url, {headers})
  }
}
