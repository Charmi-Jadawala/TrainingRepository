import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";
  result: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  validate() {
    if(this.username == "admin" && this.password == "admin"){
      this.result = "Valid User";
    }
    else{
      this.result = "Invalid User";
    }
  }

  clear() {
    this.username = "";
    this.password = "";
    this.result = "";
  }

}
