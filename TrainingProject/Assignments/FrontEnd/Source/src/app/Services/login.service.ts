import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string = "http://coursera-2399-charmi-api.radixind.in/api/";

  constructor(private http: HttpClient) { }

  getOptions() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return httpOptions;
  }

  postCurrentUser(currentUser: any){
    const options = this.getOptions();
    // return this.http.post<any>(`https://localhost:44322/api/Authenticate`, currentUser, options);
    return this.http.post<any>(`${this.url}Authenticate`, currentUser, options);
  }
}
