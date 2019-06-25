import { Injectable } from '@angular/core'

@Injectable()
export class ServicesService {

    services: Servi[] = [
        {
            header: "kjd",
            title: "jkdnc",
            desc: "jasc"
        },
        {
            header: "ad",
            title: "jkdsdsdfnc",
            desc: "ddsv"
        },
        {
            header: "kaefdjd",
            title: "jkdfdnc",
            desc: "jasdfsc"
        }
    ]
    header: String
    title: String
    desc: String

    constructor() {
        console.log("Service created");
    }

    getServices() {
        return this.services
    }
}

export interface Servi {
    header: String
    title: String
    desc: String
}

// TODO
// define interface con la clase servicio
// in services service, define an array of servicio y crealos allí
// en services.component no creamos la lista allí, sino llamamos el metodo
// getServicios de aquí que devuelve 
// la lista de servicios qe hemos definido aquí