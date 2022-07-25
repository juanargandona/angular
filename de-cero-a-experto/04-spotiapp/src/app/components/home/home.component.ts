import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  /* paises: any[] = []

  constructor(private http: HttpClient) {

    this.http.get('https://restcountries.com/v2/lang/es')
      .subscribe((resp: any) => {
        this.paises = resp;
        console.log(resp)
      });
    console.log("Constructor del home hecho")

  }
 */

  nuevasCanciones: any[] = [];
  loading: boolean;

  error = false;
  mensajeError!: string;

  constructor(private spotifyService: SpotifyService) {
    //this.spotifyService.getNewReleases();

    this.loading = true;

    this.spotifyService.getNewReleases().subscribe((data: any) => {
      console.log(data);
      this.nuevasCanciones = data;
      this.loading = false;
    }, (errorServicio) => {
      this.error = true
      console.log(errorServicio.error.error.message)
      this.mensajeError = errorServicio.error.error.message
      this.loading = false
    });

  }

  ngOnInit(): void {
  }

}
