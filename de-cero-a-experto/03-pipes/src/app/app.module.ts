import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import localEs from '@angular/common/locales/es';
registerLocaleData(localEs);

import localFr from '@angular/common/locales/fr';
registerLocaleData(localFr);

import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
