import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'casaXmore';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['María','Jose','Maria','Juan '];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente() {
    this.nombre = 'Irene';
    this.genero = 'femenino';
  }

  borrarCliente() {
    this.clientes.shift();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'casaXmore',
    edad: 49,
    direccion: 'Hélade 11'
  }

  // Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  // Async Pipe
  // Observable
  miObservable = interval(1000); // 0,1,2,3,4,5,6,7...

  // Promesa
  valorPromesa = new Promise( (resolve, reject ) => {
    setTimeout(() => {
      resolve( 'Tenemos data de la promesa ');
    }, 3500);
  })

}
