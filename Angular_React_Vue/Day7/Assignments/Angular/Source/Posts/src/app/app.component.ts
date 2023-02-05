import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Posts';
  dataVisibility: boolean = false;

  likes: {"PostName": string, "PostDescription": string, "PostedDate": string, "PostedImage": string}[] = [];

  displayList(data: {"PostName": string, "PostDescription": string, "PostedDate": string, "PostedImage": string}[]) {
    this.likes = data;
  }

  showData() {
    this.dataVisibility = true;
  }
}
