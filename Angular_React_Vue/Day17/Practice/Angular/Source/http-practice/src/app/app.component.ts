import { Component } from '@angular/core';
import { HttpUsersService } from './http-users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http-practice';
  users: Array<any> = [];

  constructor(private httpUsersService: HttpUsersService) { }

  ngOnInit(): void {
    this.httpUsersService.getUsers().subscribe((i: Array<any>) => {
      this.users = i;
      console.log(this.users);
    })
  } 
}
