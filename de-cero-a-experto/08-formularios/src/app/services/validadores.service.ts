import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  //noArgandona(control: FormControl): { [s: string]: boolean } {
  noArgandona(control: FormControl) {
    if (control.value?.toLowerCase() === 'argandona') {
      return {
        noArgandona: true
      }
    }
    return null
  }
}
