import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent  {
  artista: any={};
  tracks:any[]=[];
  loading:boolean;
  constructor(private _spotifyService: SpotifyService, private activateRoute: ActivatedRoute) {
    this.loading = true; 
    this.activateRoute.params.subscribe(params=>{this.verArtista(params.id)})
     
  }

  verArtista(id:string){
    this._spotifyService.getArtistId(id).subscribe((resp:any) => {
      console.log(resp);this.artista=resp;})
 
    this._spotifyService.getTopTracks(id).subscribe((resp:any) => {
      this.loading = true;
      console.log(resp);this.tracks=resp.tracks;
      this.loading = false;})
  }

  }