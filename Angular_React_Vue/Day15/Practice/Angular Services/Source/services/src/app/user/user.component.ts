import { Component, OnInit } from '@angular/core';
import { GreetingService } from '../greeting.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  username: string = "";
  user: string = "";

  constructor(private greetUser: GreetingService) { }

  ngOnInit(): void {
  }

  greeting() {
    this.user = this.greetUser.greet(this.username);
  }

}
