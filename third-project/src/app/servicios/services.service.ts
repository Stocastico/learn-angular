import { Injectable } from '@angular/core'

@Injectable()
export class ServicesService {

    services: Servi[]
    header: String
    title: String
    desc: String

    constructor(h: String, t: String, d: String) {
        console.log("Service created");
        this.header = h
        this.title = t
        this.desc = d
    }

    getServices() {
        //TODO
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