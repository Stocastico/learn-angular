import { Component, OnInit } from '@angular/core';
import { CamisetasService } from "../../services/camisetas.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: 'app-righ-side-bar',
  templateUrl: './righ-side-bar.component.html',
  styleUrls: ['./righ-side-bar.component.css']
})
export class RighSideBarComponent implements OnInit {
  camisetas : any[]

  constructor(private router: Router, private _camiService: CamisetasService, private activatedRoute: ActivatedRoute)
  {
    this.activatedRoute.params.subscribe(
      params => {
        this.camisetas = this._camiService.getCamisetas();
      }
    )
  }

  ngOnInit() {
  }

}
