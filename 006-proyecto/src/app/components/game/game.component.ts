import { Component, OnInit } from '@angular/core';
import { CallsService } from "../../services/calls.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html'
})
export class GameComponent implements OnInit {
  paises:any={};
  pais: string;
  capital: string;
  respuestas:string[]=[];
  numeroPreguntas:number=0;
  score:number=0;
  eficiencia: number=0;
  constructor(private _callsService:CallsService) {
    this._callsService.getNameAndCapital().subscribe(
      resp => {this.paises=resp;this.getQuestion();}
    )
   }

  ngOnInit() {
  }

  getQuestion(){
    let idx:number=0;
    this.respuestas = [];
    this.respuestas.push(this.paises[this.getRandom(this.paises.length)].capital);
    this.respuestas.push(this.paises[this.getRandom(this.paises.length)].capital);
    this.respuestas.push(this.paises[this.getRandom(this.paises.length)].capital);
    idx =this.getRandom(this.respuestas.length);
    this.capital=this.respuestas[idx];
    this.pais=this.getPais(this.respuestas[idx]);
    this.numeroPreguntas = this.numeroPreguntas + 1;

  }

  getRandom(registros:number) {
    let result:number;
    result= Math.floor(Math.random() * registros);
    console.log(result);
    return result;
}

  check(rpt:number){
    if(this.respuestas[rpt]==this.capital){
      this.score=this.score+1;      
    }
    else{
      this.score=this.score-1; 
    }
    this.eficiencia = (this.score/this.numeroPreguntas)*100
    this.getQuestion();
  }

  getPais(capital:string){
    for(let i=0;i<this.paises.length;i++){
      if(this.paises[i].capital==capital)
        return this.paises[i].name;
    }
  }
}