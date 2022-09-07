import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pais } from 'src/app/models/Pais.model';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: 'Juan Jose',
    apellido: 'Argandona',
    correo: 'juan@juan.com',
    pais: 'PRY',
    genero: 'M'
  }

  paises: Pais[] = [];

  constructor(private paisService: PaisService)
  { 

  }

  ngOnInit(): void {
    this.paisService.getPaises()
      .subscribe(paises => {
        
        this.paises = paises

        this.paises.unshift({
          nombre: '[Seleccione Pais]', codigo: ''
        })
      });
  }

  guardar(forma: NgForm) {
   
    if (forma.invalid) {
      Object.values(forma.controls).forEach(control => {
        control.markAsTouched()
      })
      return;
    }
    console.log(forma.value)
  }

}
