import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  heroes: string[] = [
    'Capitan America',
    'Spiderman',
    'Ironman',
    'Hulk',
    'Thor',
  ];

  heroeb: string = '';
  heroeBorrado: string[] = [''];
  acomulador: number = 0;

  borrarHeroe() {
    console.log(this.acomulador);
    this.acomulador++;
    console.log(this.acomulador);

    this.heroeb = this.heroes.shift() || ''; //quiere decir que cuando este this.heroes undefine retorne ''
    this.heroeBorrado.push(this.heroeb);
  }

  constructor() {}

  ngOnInit(): void {}
}
