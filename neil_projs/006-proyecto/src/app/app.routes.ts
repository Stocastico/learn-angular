import { Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { GameComponent } from './components/game/game.component';
import { DetailComponent } from './components/detail/detail.component';


export const ROUTES: Routes = [
    {path:'home/:reg', component: HomeComponent},
    {path:'search/:termino/:region', component: SearchComponent},
    {path:'detail/:codPais', component: DetailComponent},
    {path:'game', component: GameComponent},
    {path:'', pathMatch: 'full', redirectTo: 'home'},
    {path:'**', pathMatch: 'full', redirectTo: 'home'}

];