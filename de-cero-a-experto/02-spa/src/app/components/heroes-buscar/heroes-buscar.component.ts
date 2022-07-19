import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-heroes-buscar',
  templateUrl: './heroes-buscar.component.html'
})
export class HeroesBuscarComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string = "";

  constructor(private activatedRouter: ActivatedRoute,

    private _heroesService: HeroesService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => {
      this.termino = params['termino']
      this.heroes = this._heroesService.buscarHeroes(this.termino)

    })
    console.log(this.heroes)

  }

  verHeroe(i: number) {
    this.router.navigate(['/heroe', i])
  }

}
