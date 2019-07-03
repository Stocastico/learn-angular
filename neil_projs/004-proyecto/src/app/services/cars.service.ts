import { Injectable } from '@angular/core';

@Injectable()
export class CarsService {
  private cars:Car [] =
  [
      {
      nombre: "SMART fortwo 0.9 66kW 90CV COUPE 3p.",
      precio: 15400,
      garantia: 2,
      cambio: "automatico",
      img: "https://a.ccdn.es/cnet/2019/06/21/39596160/191871495_g.jpg"
      },
      {
      nombre: "PEUGEOT Rifter GT Line Standard PureTech 81kW 5p.",
      precio: 19340,
      garantia: 4,
      cambio: "manual",
      img: "https://a.ccdn.es/cnet/2019/06/26/39693225/192706084_g.jpg"
      },
      {
        nombre: "SMART fortwo 0.9 66kW 90CV COUPE 3p.",
        precio: 15400,
        garantia: 2,
        cambio: "automatico",
        img: "https://a.ccdn.es/cnet/2019/06/21/39596160/191871495_g.jpg"
        },
        {
        nombre: "PEUGEOT Rifter GT Line Standard PureTech 81kW 5p.",
        precio: 19340,
        garantia: 4,
        cambio: "manual",
        img: "https://a.ccdn.es/cnet/2019/06/26/39693225/192706084_g.jpg"
        }
      ];
  
  constructor() {}

  getCars(){
    return this.cars;
  }

  buscarCars(termino:string, precio:number, garantia:number, cambio:string): Car[]{
     let carsSearch: Car[]=[];
    termino = termino.toLowerCase(); 
    for(let i = 0; i<this.cars.length; i++)
    {
      let car = this.cars[i];
      let nombre = car.nombre.toLowerCase();
      
      if(nombre.indexOf(termino)>=0 && 
      this.esPrecio(precio,car.precio) &&
      this.esGarantia(garantia,car.garantia) &&
        this.esCambio(cambio, car.cambio))
         {
          carsSearch.push(car);
      } 
    }
    return carsSearch; 
  } 

  esPrecio(precioSearch: number, precioServicio: number){
    console.log(precioSearch);
    if(precioSearch == 0 || precioSearch >= precioServicio){return true;}
    else return false;
  }

  esGarantia(garantiaSearch: number, garantiaServicio: number){
    if(garantiaSearch == 0 || garantiaSearch >= garantiaServicio){return true;}
    return false;
  }

  esCambio(cambioSearch: string, cambioServicio: string){
    if(cambioSearch == "" || cambioSearch == cambioServicio){return true;}
    return false;
  }
}

export interface Car {
        nombre: string;
        precio: number;
        garantia: number;
        cambio: string;
        img: string;
}