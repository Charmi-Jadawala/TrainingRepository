import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  Name: string = "";

  @Output() getValue = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  passData() {
    this.getValue.emit(this.Name);
  }
  
}
