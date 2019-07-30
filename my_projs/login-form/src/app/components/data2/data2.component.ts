import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-data2',
  templateUrl: './data2.component.html',
  styleUrls: ['./data2.component.css']
})
export class Data2Component  {

  usuario:object = {
      nombreCompleto: {
        nombre: "Neil",
        apellido: "Revilla"
      },
      email: "nrevilla@gmail.com"
  }
  
  forma:FormGroup;
  constructor() {
    this.forma = new FormGroup({

      nombreCompleto: new FormGroup({
        'nombre': new FormControl('', [Validators.required,
          Validators.minLength(3)]),
        'apellido': new FormControl('', Validators.required)
      }),
      'email': new FormControl('', [
                                    Validators.required,
                                    Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
                                    ]) 
    })

    this.forma.setValue(this.usuario)
  }

  guardarCambios(){
    console.log(this.forma.value);
    console.log(this.forma)

    this.forma.reset({
      nombreCompleto:{
        nombre:"",
        apellido:""
      },
      email:""
    })
  }

}

