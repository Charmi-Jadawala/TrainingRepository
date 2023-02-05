import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

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

  sendEmailDetails(userDetails: any) {
    const options = this.getOptions();
    // return this.http.post<any>(`https://localhost:44322/api/Email`, userDetails, options);
    return this.http.post<any>(`${this.url}Email`, userDetails, options);
  }

  postNewUser(newUser: any) {
    const options = this.getOptions();
    // return this.http.post<any>(`https://localhost:44322/api/login`, newUser, options);
    return this.http.post<any>(`${this.url}Login`, newUser, options);
  }
}
