import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { APP_ROUTING } from './app.routes';

import {CoursesService} from './servicios/courses.service';

//componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { CoursesComponent } from './componentes/courses/courses.component';
import { CourseComponent } from './componentes/course/course.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';
import { FindcoursesComponent } from './componentes/findcourses/findcourses.component';
import { CursosCardComponent } from './componentes/cursos-card/cursos-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CoursesComponent,
    CourseComponent,
    NavbarComponent,
    FindcoursesComponent,
    CursosCardComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
