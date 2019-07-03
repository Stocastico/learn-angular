import { RouterModule, Routes } from "@angular/router";
import { ListaCarsComponent } from "./components/lista-cars/lista-cars.component";
import { CarDetailComponent } from "./components/car-detail/car-detail.component";

const APP_ROUTES: Routes = [
    {path: 'lista-cars/:termino/:precio/:garantia/:cambio', component: ListaCarsComponent },
    {path: 'car-detail/:id', component: CarDetailComponent },
    {path: '**', pathMatch: 'full', redirectTo:'lista-cars'}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);