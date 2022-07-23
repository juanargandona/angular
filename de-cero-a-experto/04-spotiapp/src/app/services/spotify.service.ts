import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  releases: any[] = [];

  constructor(private http: HttpClient) {
    console.log("SpotifyService Listo")

  }
  /*   getNewReleases() {
      const headers = new HttpHeaders({
        'Authorization': 'Bearer BQDLXPu1Qp8KEKhw02aUI4GZgpeRoX8HdYaod_KdJ_pEITDidkYLSOv9Dja78Ozzaw6pBgV2YZLsg9OJdbezVtyI2CZT5fmWfIgudBZIoAc4IQ9x_5A',
      });
      this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers }).subscribe(data => {
        console.log(data);
      })
    } */

  getNewReleases() {
    /*const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD0yZQQgzXNf0P5I1yax-ofkbbHy0v4YGvW9N8NDZKJo41xdj9qxgeElsbmfNtiNy6-jizwTc7mi_nULrGakug7JsHvhvz1knP3096Yrl1Vsdnnevk',
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .pipe(map((data: any) => data['albums'].items));*/
    return this.getQuery('browse/new-releases?limit=20').pipe(map((data: any) => data['albums'].items));

  }

  /*getArtista(termino: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBJ5WwDt_b10ajrusJPn0UfrvMo2ZwSGSmRsQ5ZHpr8AhfsQckwn75gV1j41hK1rvl9pKruHmVqPg_oZ2vB1fWl5qq3edFppSigKweZmlxbna0g720',
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers });
  }*/

  getArtistas(termino: string) {
    /*const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBJ5WwDt_b10ajrusJPn0UfrvMo2ZwSGSmRsQ5ZHpr8AhfsQckwn75gV1j41hK1rvl9pKruHmVqPg_oZ2vB1fWl5qq3edFppSigKweZmlxbna0g720',
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers })
      .pipe(map((data: any) => data['artists'].items));*/
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map((data: any) => data['artists'].items));
  }

  getArtista(id: string) {

    return this.getQuery(`artists/${id}`);//.pipe(map((data: any) => data['artists'].items));
  }

  getQuery(query: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBvGUAswMAdoyUssd66O-akUN9gI24H0Vlivtjyhow-UHtL-ktodcdB0XVvjTX7rP-saWYNeXwJ8MATrs8qJ1-pf1N6phe2UGUnp7vozwbgVc__Am8',
    });
    const URL = `https://api.spotify.com/v1/${query}`;

    return this.http.get(URL, { headers })


  }
}
