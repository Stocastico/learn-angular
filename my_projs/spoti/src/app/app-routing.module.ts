import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';

const routes: Routes = [];

const APP_ROUTES: Routes = [
  {path:'home', component: HomeComponent},
  {path:'search', component: SearchComponent},
  {path:'artist/:artistId', component: ArtistComponent}
]
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
