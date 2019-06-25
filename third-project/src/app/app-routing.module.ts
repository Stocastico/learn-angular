import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';

const APP_ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
]
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)

// @NgModule({
//   imports: [APP_ROUTING],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
