import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { PreciosComponent } from './components/precios/precios.component';
import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';
import { CallbackComponent } from './components/callback/callback.component';
import { AuthorizeComponent } from './components/authorize/authorize.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProtegidaComponent,
    PreciosComponent,
    AuthButtonComponent,
    CallbackComponent,
    AuthorizeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-426sko9c.us.auth0.com',
      clientId: 'MR6franAUbbYBMzOKafVYf2RLmTLRh9Q'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
