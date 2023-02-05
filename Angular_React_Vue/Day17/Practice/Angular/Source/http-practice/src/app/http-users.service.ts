import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpUsersService {

  url: string = "https://gorest.co.in/public/v2/";

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<Array<any>>(`${this.url}users`);
  }

}
