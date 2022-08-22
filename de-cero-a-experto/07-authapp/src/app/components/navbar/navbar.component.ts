import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isAuthenticated = false

  constructor(
    @Inject(DOCUMENT) public document: Document,
    public auth: AuthService) { 
    this.auth.isAuthenticated$.subscribe({
      next: (isAuthenticated) => {
        this.isAuthenticated = isAuthenticated
      },
      error: (msg) => {
        console.log('error')
      }
    })
    
    }

  ngOnInit(): void {
  }

  login() {
    console.log("isAuthenticated: " + this.isAuthenticated)
    this.auth.loginWithRedirect()
    console.log("isAuthenticated: " + this.isAuthenticated)
  }

  logout() {
    this.auth.logout({
      returnTo: this.document.location.origin
    });
  }

}
