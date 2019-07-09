import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { DetailComponent } from './components/detail/detail.component';
import { GameComponent } from './components/game/game.component';

export const ROUTES: Routes = [
  { path : 'home/:region', component: HomeComponent },
  { path : 'search/:termino/:region', component: SearchComponent },
  { path : 'detail/:countryCode', component: DetailComponent },
  { path : 'game', component: GameComponent },
  { path : '', pathMatch: 'full', redirectTo: 'home' },
  { path : '**', pathMatch: 'full', redirectTo: 'home' },
]

