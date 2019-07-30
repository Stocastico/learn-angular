import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";
import { SpotifyService } from '../../services/spotify.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  searchResults : any[] = []

  constructor(private _spotifyService : SpotifyService,
              private router:Router) { }

  ngOnInit() {
  }

  searchAlbums(term: string, type: any)
  {
    this._spotifyService.search(term, type).subscribe((data:any)=>
    {
      if (type.value == "artist") {
        console.log(data.artists.items)
        this.searchResults = data.artists.items;
      }
      else if (type.value == "album")
        this.searchResults = data.albums.items;
      else if (type.value == "playlist")
        this.searchResults = data.playlists.items;
      else if (type.value == "track")
        this.searchResults = data.tracks.items;

    });
    return false;
  }

  seeArtist(id: string) {
    this.router.navigate(['/artist', id]);
  }

}
