import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  usuario: object = {
    nombre: null,
    apellido: null,
    pais:"",
    email: null
    
  }

  paises = [{
    cod:"ITA",
    nombre:"Italia"
  },
  {
    cod:"ESP",
    nombre:"España"
  },
  {
    cod:"FRA",
    nombre:"Francia"
  }]
  constructor() { }

  guardar(forma: NgForm){
    console.log(forma);
    console.log(forma.value);
    console.log(this.usuario['nombre']);
  }



}
