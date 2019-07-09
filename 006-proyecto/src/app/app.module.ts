import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { DetailComponent } from './components/detail/detail.component';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

//Rutas
import { ROUTES } from "./app.routes";
import { NavbarComponent } from './share/navbar/navbar/navbar.component';
import { GameComponent } from './components/game/game.component';
import { CardComponent } from './components/card/card.component';

//servicios
import { CallsService } from './services/calls.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    DetailComponent,
    NavbarComponent,
    GameComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [CallsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
