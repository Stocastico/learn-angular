import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { CoursesComponent } from './componentes/courses/courses.component';
import { CourseComponent } from './componentes/course/course.component';
import { FindcoursesComponent } from './componentes/findcourses/findcourses.component';


const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'courses', component: CoursesComponent},
    {path: 'course/:id', component: CourseComponent},
    {path: 'findcourses/:termino', component: FindcoursesComponent},
    {path: '**', pathMatch: 'full', redirectTo:'home'}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);