import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { DetailComponent } from './components/detail/detail.component';
import { NavbarComponent } from './share/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { CardComponent } from './components/card/card.component';

import { ROUTES } from './app-routing.module';
import { GameComponent } from './components/game/game.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    DetailComponent,
    NavbarComponent,
    HeaderComponent,
    QuizComponent,
    CardComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
