import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    usuario-nuevo Works!
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private router: ActivatedRoute) {
    this.router.parent!.params.subscribe(parametros => {
      console.log("Ruta Hija Usuario Nuevo")
      console.log(parametros)
    })
  }

  ngOnInit(): void {
  }

}
