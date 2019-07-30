import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artist: any [] = [];
  loading: boolean;
  constructor(private _spotifyService: SpotifyService, private router:Router) { 
    this.loading = false;
  }

  ngOnInit() {
  }

  buscar(term:string){
    this.loading = true;
    this._spotifyService.getArtist(term)
    .subscribe((data:any)=>{
                      this.artist = data['artists'].items;
                      this.loading = false;});
  }

  verArtista(id:string){
    this.router.navigate(['/artist',id]);
  }
}
