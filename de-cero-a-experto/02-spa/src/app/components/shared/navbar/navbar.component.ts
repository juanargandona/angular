import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {



  constructor(private _heroeService: HeroesService,
    private router: Router) { }

  ngOnInit(): void {
  }

  buscarHeroe(termino: string) {
    //return this._heroeService.buscarHeroes(termino)
    this.router.navigate(['/heroes-buscar', termino]);

  }

}
