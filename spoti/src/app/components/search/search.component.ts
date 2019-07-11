import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  albumsFound : any[] = []

  constructor(private _spotifyService : SpotifyService) { }

  ngOnInit() {
  }

  searchAlbums(term: string, type: string)
  {
    this._spotifyService.searchAlbums(term, type).subscribe((data:any)=>
    {
      console.log(data)
      console.log(data.artists)
      console.log(data.artists.items)
      if (type == "artist")
        this.albumsFound = data.artists.items;
      else if (type == "album")
        this.albumsFound = data.albums.items;
      else if (type == "playlist")
        this.albumsFound = data.playlists.items;
      else if (type == "track")
        this.albumsFound = data.tracks.items;

    });
  }


}
