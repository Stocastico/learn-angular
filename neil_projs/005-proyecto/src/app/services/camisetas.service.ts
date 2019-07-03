import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CamisetasService {
  private camisetas:Camiseta [] =
  [
      {
        id: 1,
        precio: 85,
        jugador: "LeBron James",
        numero: 23,
        img: "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3212000/ff_3212792_full.jpg"
      },
      {
        id: 2,
        precio: 65,
        jugador: "Kyrie Irving",
        numero: 11,
        img: "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/pnuh4c0kmqvoou6b0mzk/kyrie-irving-boston-celtics-icon-edition-swingman-big-kids-nba-jersey-wQdT0s.jpg"
      },
      {
        id: 3,
        precio: 70,
        jugador: "Damien Lillard",
        numero: 0,
        img: "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_2711000/ff_2711161_full.jpg"
        },
      ];

  constructor() { }

  getCamisetas(){
    return this.camisetas;
  }
}

export interface Camiseta
{
  id:number;
  precio: number;
  jugador: string;
  numero: number;
  img: string;
}