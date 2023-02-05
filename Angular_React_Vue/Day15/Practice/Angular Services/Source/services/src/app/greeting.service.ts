import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {

  constructor() { }

  greet(userName: string) {
    return ("Welcome " + userName.toLocaleUpperCase());
  }
}
