import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>

    <h3>
      La base es: <strong> {{ base }} </strong>
    </h3>

    <button (click)="acom(-base)">- {{ base }}</button>

    <span> {{ numero }} </span>

    <button (click)="acom(base)">+ {{ base }}</button>
  `
})
export class contComponent {

    title: string = 'Contador App';
    numero: number = 10;
    base: number = 5;
  
    acom(valor: number) {
      this.numero += valor;
    }
}
