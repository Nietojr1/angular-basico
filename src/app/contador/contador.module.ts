import { NgModule } from '@angular/core';
import { contComponent } from './contador/contador.component';


@NgModule({
    declarations:[
        contComponent
    ],
    exports:[
        contComponent
    ],

})
export class contadorModule{

}