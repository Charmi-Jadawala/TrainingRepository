import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit {
  length: number = 0;
  breadth: number = 0;
  result: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  area() {
    this.result = this.length * this.breadth;
  }

  clear() {
    this.length = 0;
    this.breadth = 0;
    this.result = 0;
  }

}
