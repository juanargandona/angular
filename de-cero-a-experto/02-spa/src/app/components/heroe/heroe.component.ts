import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from '../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: any = {}

  constructor(private activatedRouter: ActivatedRoute,

    private _heroeService: HeroesService) {

    this.activatedRouter.params.subscribe(params => {

      this.heroe = this._heroeService.getHeroe(params['id'])



    })

  }



}
