import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AppsService {
  ex1Description = 'Use the NgModel directive to display a data property and update that property when the user makes changes';
  constructor() { }
  
  getEx1Desctiption() {
    return this.ex1Description;
  }

}
