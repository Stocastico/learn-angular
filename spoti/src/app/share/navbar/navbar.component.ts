import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { 
    //this.setCountries("Europe");
  }

  ngOnInit() {
  }

  // setCountries(reg:string){
  //   this.router.navigate(['/home', reg]);
  // }

  // searchCountries(termino:string, region:string){
  //   this.router.navigate(['/search', termino, region ]);
  //   return false;
  // }

}
