import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  nombreLower: string = 'casaxmore';
  nombreUpper: string = 'CASAXMORE';
  nombreCompleto: string = 'cAxMOre JaNdER';

  fecha: Date = new Date();

}
