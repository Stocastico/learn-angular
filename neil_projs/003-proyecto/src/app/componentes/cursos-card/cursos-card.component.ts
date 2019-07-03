import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos-card',
  templateUrl: './cursos-card.component.html'
})
export class CursosCardComponent implements OnInit {
  @Input() course:any = {};
  @Input() i:number;
  @Output() courseSelected: EventEmitter<number>;
  
  constructor(private router:Router) {
     this.courseSelected = new EventEmitter();
   }

  ngOnInit() {
  }

  verCurso() {
    //this.router.navigate(['/course',this.i]);
    this.courseSelected.emit(this.i);
  }

}
