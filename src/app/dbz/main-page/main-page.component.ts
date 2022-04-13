import { Component, OnInit } from '@angular/core';
import { Personaje } from './interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  
  personajes: Personaje[] = [
    {
      nombre: 'Krillin',
      poder: 7000
    },
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 8500
    },
    {
      nombre: 'Rochi',
      poder: 3500
    },
  ];
  
  

}
