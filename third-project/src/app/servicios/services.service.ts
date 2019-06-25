import { Injectable } from '@angular/core'

@Injectable()
export class ServicesService {

    header: String
    title: String
    desc: String

    constructor(h: String, t: String, d: String) {
        console.log("Service created");
        this.header = h
        this.title = t
        this.desc = d
    }
}