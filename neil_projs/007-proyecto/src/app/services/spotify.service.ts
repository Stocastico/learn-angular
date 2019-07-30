import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  
  constructor(private http: HttpClient) { 
    
  }

  getReleases(){

    return this.getQuery('browse/new-releases?limit=20');
    
  }

  getArtist(term:string){
    
    return this.getQuery(`search?q=${ term }&type=artist`);
  }

  getArtistId(id:string){
    
    return this.getQuery(`artists/${ id }`);
  }

  getTopTracks(id:string){
    
    return this.getQuery(`artists/${ id }/top-tracks?country=US`);
  }

  getQuery(query:string){
    const url=`https://api.spotify.com/v1/${ query}`;

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQBUY-kQQc-5Apx_Qa13lTbiG1kjbAyjJ_xVwa0nagZz1KKzWB7xqzFuzQ_ZgH501QmG8G_fw52gh8g9uxY'
    })

    return this.http.get(url, { headers })

  }


}
