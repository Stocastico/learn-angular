import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-camiseta',
  templateUrl: './camiseta.component.html',
  styleUrls: ['./camiseta.component.css']
})
export class CamisetaComponent implements OnInit {
  @Input() camiseta: any = {};

  constructor() { }

  ngOnInit() {
  }

}
