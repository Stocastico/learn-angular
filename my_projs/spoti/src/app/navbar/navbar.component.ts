import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) {
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

  searchAlbums(term:string){
    this.router.navigate(['/search', term ]);
    return false;
  }

}