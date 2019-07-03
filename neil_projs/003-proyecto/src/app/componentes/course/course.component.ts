import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../../servicios/courses.service';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html'
})
export class CourseComponent implements OnInit {
  course:any = {};

  constructor( private activatedRoute:ActivatedRoute,
                private _coursesService:CoursesService) { 
    this.activatedRoute.params.subscribe(
      params =>{
       
        this.course = _coursesService.getCourse(params['id']);
        console.log(params['id']);
        console.log(params['id2']);
        console.log(this.course);
      }) 
      
  }

  ngOnInit() {
  }

}
