import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  username: any = sessionStorage.getItem("FullName");
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  logoutUser(){
    this.authService.logout();
  }

}
