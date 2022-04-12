import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html',
    styleUrls: ['./heroe.component.css']
})

export class HeroeComponent{
    nombre:string = 'Ironman';
    edad:number = 40;

    get nombCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    obtNombre():string{
        return `${this.nombre} - ${this.edad}`;
    }

    cambNombre(): void {
        this.nombre = 'Spiderman';
    }   
    
    cambEdad(): void {
        this.edad = 30;
    }    
}