import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  albums : any[] = []

  constructor(private _spotifyService : SpotifyService)
  {
    this._spotifyService.getReleases().subscribe((data:any)=>
      {
        this.albums = data.albums.items;
        console.log(data)
      });
  }

  ngOnInit() {
  }

}
