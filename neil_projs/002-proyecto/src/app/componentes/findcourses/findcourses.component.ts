import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService} from '../../servicios/courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-findcourses',
  templateUrl: './findcourses.component.html'
})
export class FindcoursesComponent implements OnInit {
  courses: any[] = [];
  
  constructor( private activatedRoute:ActivatedRoute,
              private _courseService: CoursesService,
              private router:Router) { 
    this.activatedRoute.params.subscribe(
      params => {this.courses = _courseService.buscarCurso(params['termino']);}
    )
  }

  ngOnInit() {
  }

  verCurso(i:number) {
    console.log(i);
    this.router.navigate(['/course',i]);
  }
}
