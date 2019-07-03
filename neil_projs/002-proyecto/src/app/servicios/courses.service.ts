import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {
    private courses:Curso [] =
    [
        {
        nombre: "Anguar",
        nivel: "Intermedio",
        inicio: "Octubre",
        precio: "1000 euros",
        img: "https://www.peerbits.com/wp-content/uploads/2018/10/angular-virtual-scroll-drag-drop-main.jpg"
        },
        {
        nombre: ".Net",
        nivel: "Avanzado",
        inicio: "Noviembre",
        precio: "1500 euros",
        img: "https://microsofters.com/wp-content/uploads/2015/08/microsoft-dotnet.jpg"
        },
        {
        nombre: "Big Data",
        nivel: "Intermedio",
        inicio: "octubre",
        precio: "2000 euros",
        img: "https://iddocente.com/wp-content/uploads/2018/12/idd_big_data_educacion-840x400.jpg"
        }
        ];
    
    constructor(){
    console.log ("servicio listo!");
    }
    getCourses(){
        return this.courses;
      } 
    getCourse(id:string){
        return this.courses[id];
    }

    buscarCurso(termino:string):Curso[]{
        let cursoArr:Curso[]=[];
        termino = termino.toLowerCase();
        for(let curso of this.courses){
            let nombre = curso.nombre.toLowerCase();
            if(nombre.indexOf(termino)>=0)
                cursoArr.push(curso);

        }
        return cursoArr;
    }
    }

    export interface Curso{
        nombre: string;
        nivel: string;
        inicio: string;
        precio:string;
        img:string;
    } 
