import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  id: string = '';
  tracks: any = {};
  constructor(private router:Router, 
              private activateRoute:ActivatedRoute,
              private _spotiService: SpotifyService)
  { 
    this.activateRoute.params.subscribe(
      (params) => { 
        console.log(params)
        this._spotiService.searchArtist(params.artistId).subscribe((resp:any)=>
        {
          console.log("Gatto");
          console.log(resp);
          this.id=params.artistId;
          this.tracks=resp.tracks;
          console.log(resp);
        });
        }
      );
  }

  ngOnInit() {
  }


}
