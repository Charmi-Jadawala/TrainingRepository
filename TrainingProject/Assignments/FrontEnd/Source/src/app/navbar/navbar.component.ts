import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service';
import { SignupService } from '../Services/signup.service';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  signUpForm: FormGroup;
  newUser: any;
  userEmailDetails!: { FullName: string, Email: string, Otp: number };

  verfiyOtp: FormGroup;
  generatedOtp!: number;
  verificationResult: string = "User Verification is Pending..."

  loginForm: FormGroup;
  currentUser: any;
  isInvalidUser: boolean = false;
  condition!: boolean;
  message: string = "Invalid email or password...";

  constructor(private fb: FormBuilder,  private router: Router,
      private signupService: SignupService, private loginService: LoginService, private authService: AuthService) {
    this.signUpForm = fb.group({
      fullName: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(72)])]
    });

    this.loginForm = fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(72)])]
    });

    this.verfiyOtp = fb.group({
      otp: ['', Validators.compose([Validators.required, Validators.min(100000), Validators.max(1000000)])],
    });
  }

  ngOnInit(): void {
    this.condition = this.authService.isLoggedIn();
  }

  onSubmitSignUp() {
    this.newUser = this.signUpForm.value;
    this.sendEmail();
  }

  private sendEmail() {
    this.generatedOtp = Math.floor(100000 + Math.random() * 900000);
    console.log(this.generatedOtp);

    this.userEmailDetails = {
      FullName: this.signUpForm.value.fullName,
      Email: this.signUpForm.value.email,
      Otp: this.generatedOtp
    }

    this.signupService.sendEmailDetails(this.userEmailDetails).subscribe((i: any) => {
      this.userEmailDetails = i;
    });
  }

  onSubmitLogin() {
    this.currentUser = this.loginForm.value;
    this.loginService.postCurrentUser(this.currentUser).subscribe((i: any) => {
      const token = (<any>i).token;

      if (token == "Invalid client request...") {
        this.isInvalidUser = true;
      }
      else {
        sessionStorage.setItem("jwtToken", token);
        sessionStorage.setItem("Id", (<any>i).userId);
        sessionStorage.setItem("FullName", (<any>i).fullName);
        sessionStorage.setItem("Email", (<any>i).email);

        this.router.navigate(["/welcomeUser"]);
      }
    });
  }

  onVerify() {
    if (this.generatedOtp == this.verfiyOtp.value.otp) {
      this.verificationResult = "User verified successfully..."

      this.signupService.postNewUser(this.newUser).subscribe((i: any) => {
        this.newUser = i;
      });
    }
    else {
      this.verificationResult = "User verification failed..."
    }
  }

  onResend() {
    this.sendEmail();
  }

  logout(){
    this.authService.logout();
  }
}
