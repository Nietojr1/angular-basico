import { Component, Input } from '@angular/core';
import { Personaje } from '../main-page/interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input('agregar')  personajes: Personaje[]= [];

  nuevo:Personaje = {
    nombre: '',
    poder: 0
  };

  agregar() {
    //validamos que no hayan registros y el trim se usa para eliminar espacios en blanco
    if (this.nuevo.nombre.trim().length === 0){ 
      return;
    }

    this.personajes.push(this.nuevo);
    this.nuevo = {nombre:'', poder:0

    }
    console.log(this.personajes);
  }

}
