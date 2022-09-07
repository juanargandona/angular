import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Pais } from '../models/Pais.model';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) { }

  getPaises() {

    return this.http.get <Pais[]>('https://restcountries.com/v3.1/lang/spa')
      .pipe(
        map((resp: any[]) =>
          resp.map(pais => ({ nombre: pais.name.common, codigo: pais.cca3 })
          )
        )
      );

  }

}
