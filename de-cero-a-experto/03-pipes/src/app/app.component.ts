import { Component } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Capitan America';
  nombre2: string = 'Juan Argandoña';

  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI: number = Math.PI;

  porcentaje: number = 0.23456;

  salario: number = 1234.567;

  fecha: Date = new Date();

  idioma: string = 'fr'

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Llegó la data')
    }, 3500)
  })

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 509,
    direccion: {
      calle: 'Av. Los Frutales',
      numero: '6586'
    }
  }

}
