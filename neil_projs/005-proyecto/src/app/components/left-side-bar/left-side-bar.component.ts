import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.css']
})
export class LeftSideBarComponent implements OnInit {

  
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/lista-cars', "", 0, 0, ""]);
  }

  buscar(termino: string, precio:number, garantia: number, cambio: string)
  {
      this.router.navigate(['/lista-cars', termino, precio, garantia, cambio]);
      return false;
  } 

}
