import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router ) { }

  logout(): any {
    sessionStorage.removeItem("jwtToken");
    sessionStorage.removeItem("Id");
    sessionStorage.removeItem("FullName");
    sessionStorage.removeItem("Email");
    sessionStorage.removeItem("Role");

    this.router.navigate(['']);
  }

  getUser(): any {
    return sessionStorage.getItem('Id');
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }
}
