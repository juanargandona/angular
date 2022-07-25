import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, timeInterval } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  releases: any[] = [];
  token: any;

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

    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {

    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe(map((data: any) => data['tracks']));
  }

  getQuery(query: string) {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDrJ4jBq1viLifsSRcG8rUTPJSd59xETt7zO_LZmz51otesDT7TRefICFO49184lUunvZWAwCLgC-AwlFKjOBbwRQGrr5x5THu7iCZxqCV6Jc5iX-o',
    });
    console.log("headers: ", headers)
    const URL = `https://api.spotify.com/v1/${query}`;

    return this.http.get(URL, { headers })
  }

  getQueryFailed(query: string) {
    const CLIENT_ID = 'd6b55734aa3f4b49af89ae8023b6c69e';
    const CLIENT_SECRET = '4659ca881ead4eed81c45197f071db34';
    const URL_TOKEN = `http://localhost:3000/spotify/${CLIENT_ID}/${CLIENT_SECRET}`
    console.log(URL_TOKEN)
    this.http.get(URL_TOKEN).subscribe((data: any) => {
      this.token = data['access_token']
      console.log("this.token: ", this.token)
      const headers = new HttpHeaders({ 'Authorization': `Bearer ${this.token}` });
      console.log("headers: ", headers)
      const URL = `https://api.spotify.com/v1/${query}`;
      return this.http.get(URL, { headers })
    })

  }

  getToken(client_id: string, client_secret: string) {
    const URL_TOKEN = `http://localhost:3000/spotify/${client_id}/${client_secret}`
    console.log(URL_TOKEN)
    this.http.get(URL_TOKEN).subscribe((data: any) => {
      this.token = data['access_token']
      console.log("this.token: ", this.token)
    })

  }
}
