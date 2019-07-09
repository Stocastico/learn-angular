import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  _

  constructor(private router : Router) { 
    this.setCountries("Asia");
  }

  ngOnInit() {
  }

  setCountries(region : string) {
    this.router.navigate(['home/', region]);
  }

}
