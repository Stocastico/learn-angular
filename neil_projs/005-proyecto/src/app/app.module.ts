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
import { CarComponent } from './components/car/car.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { RighSideBarComponent } from './components/righ-side-bar/righ-side-bar.component';
import { ListaCamisetasComponent } from './components/lista-camisetas/lista-camisetas.component';
import { CamisetaComponent } from './components/camiseta/camiseta.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCarsComponent,
    LeftSideBarComponent,
    CarComponent,
    CarDetailComponent,
    RighSideBarComponent,
    ListaCamisetasComponent,
    CamisetaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
