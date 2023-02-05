import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../Services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminLoginForm: FormGroup;
  currentUser: any;
  isInvalidUser: boolean = false;
  message: string = "Invalid email or password...";

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {
    this.adminLoginForm = fb.group({
      fullName: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(72)])]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.currentUser = this.adminLoginForm.value;
    this.loginService.postCurrentUser(this.currentUser).subscribe((i: any) => {
      const token = (<any>i).token;

      if(token == "Invalid client request..."){
        this.isInvalidUser = true;   
      }
      else{
        sessionStorage.setItem("jwtToken", token);
        sessionStorage.setItem("Id", (<any>i).userId);
        sessionStorage.setItem("FullName", (<any>i).fullName);
        sessionStorage.setItem("Email", (<any>i).email);
        sessionStorage.setItem("Role", (<any>i).role);
  
        this.router.navigate(["adminHome"]);
      }
    });
  }

}
