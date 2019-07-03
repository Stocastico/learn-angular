import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Services
import { CarsService } from "./services/cars.service";

//Routes
import { APP_ROUTING } from "./app.routes";

//Components
import { AppComponent } from './app.component';
import { ListaCarsComponent } from './components/lista-cars/lista-cars.component';
import { LeftSideBarComponent } from './components/left-side-bar/left-side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCarsComponent,
    LeftSideBarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
