import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LCONTAINER_LENGTH } from '@angular/core/src/render3/interfaces/container';
import { UsuarioModel } from '../models/usuario.model';

import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Crear usuario
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // Login in 
  //hhttps://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts'
  private api_key = 'AIzaSyD8ffF7tKcNCvGJ04rM1ZJtMfKThyePp_0'
  private userToken: string = '';

  constructor(private http: HttpClient) {
   
  }
  
  logout() { 
    localStorage.removeItem('token');
  }

  login(usuario: UsuarioModel) {
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };
    return this.http.post(
      `${this.url}:signInWithPassword?key=${this.api_key}`,
      authData
    ).pipe(
      map(resp => {
        this.guardarToken(resp['idToken'])
        return resp;
      })
    )


  }

  nuevoUsuario(usuario: UsuarioModel) {
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };
    return this.http.post(
      `${this.url}:signUp?key=${this.api_key}`,
      authData
    ).pipe(
      map(resp => {        
        this.guardarToken(resp['idToken'])
        return resp;
      })
    )
  }

  private guardarToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken)

    let hoy = new Date()
    hoy.setSeconds(3600);

    localStorage.setItem('expira', hoy.getTime().toString());
  }

  private leerToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token')  
    } else {
      this.userToken = ''
    }
    return this.userToken;
    
  }

  estaAutenticado(): boolean {
    if (this.userToken.length < 2) {
      return false;
    }

    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();

    expiraDate.setTime(expira);

    if (expiraDate > new Date()) {
      return true;
    } else {
      return false;
    }

   
  }

}
