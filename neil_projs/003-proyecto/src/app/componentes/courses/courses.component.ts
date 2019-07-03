import { Component, OnInit } from '@angular/core';
import { CoursesService, Curso } from '../../servicios/courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html'
})
export class CoursesComponent implements OnInit {

  courses:Curso [] = [];
  constructor(private _coursesService:CoursesService,
              private router:Router ){

  }

  ngOnInit() {
    this.courses = this._coursesService.getCourses();
    //console.log(this.courses);
  }
  verCurso(i:number) {
    console.log(i);
    this.router.navigate(['/course',i]);
  }
 

}
