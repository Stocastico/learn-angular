import { RouterModule, Routes } from "@angular/router";
import { ListaCarsComponent } from "./components/lista-cars/lista-cars.component";

const APP_ROUTES: Routes = [
    {path: 'lista-cars/:termino/:precio/:garantia/:cambio', component: ListaCarsComponent },
    {path: '**', pathMatch: 'full', redirectTo:'lista-cars'}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);