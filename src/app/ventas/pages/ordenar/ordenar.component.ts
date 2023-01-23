import { Component } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent {

  enMayusculas: boolean = false;

  cambiarEstado() {
    // Primera opción
    /* if ( this.enMayusculas === false) {
      this.enMayusculas = true;
    }else {
      this.enMayusculas = false;
    } */

   // Segunda opción
   this.enMayusculas = !this.enMayusculas;
  }
}


