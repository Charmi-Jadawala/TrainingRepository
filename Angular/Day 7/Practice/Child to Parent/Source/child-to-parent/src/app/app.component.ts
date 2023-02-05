import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'child-to-parent';

  message: string = "";

  Display(name: string) {
    this.message = name;
  }
  
}
