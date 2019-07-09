import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: []
})
export class CardComponent implements OnInit {
  @Input() pais:any={};
  @Output() countrySelected: EventEmitter<string>;
  constructor() {
    this.countrySelected = new EventEmitter;
   }

  ngOnInit() {
  }

  verPais(codPais:string) {
  
    this.countrySelected.emit(codPais);
  }
}
