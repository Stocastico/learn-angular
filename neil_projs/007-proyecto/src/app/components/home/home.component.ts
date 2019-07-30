import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  [x: string]: any;
  albums: any [] = [];
  loading: boolean;
  constructor(private _spotifyService: SpotifyService, private router:Router ) { 
    this.loading = true;
    this._spotifyService.getReleases()
    .subscribe((data:any)=> {this.albums = data.albums.items
                          this.loading = false;
    });
  }

  ngOnInit() {
  }

  verArtista(id:string){
    this.router.navigate(['/artist',id]);
  }
}
