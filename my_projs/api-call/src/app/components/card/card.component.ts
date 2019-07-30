import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: []
})
export class CardComponent implements OnInit {

  @Input() country : any = {}
  @Output() countrySelected : EventEmitter<string>;

  constructor() {
    this.countrySelected = new EventEmitter
  }

  ngOnInit() {
  }

  seeCountry(countryCode : string) {
    this.countrySelected.emit(countryCode);
  }
}
