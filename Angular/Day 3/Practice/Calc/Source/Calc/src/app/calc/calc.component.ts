import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  Num1: number = 0;
  Num2: number = 0;
  result: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addition() {
    this.result = this.Num1 + this.Num2;
  }

  subtraction() {
    this.result = this.Num1 - this.Num2;
  }

  multiplication() {
    this.result = this.Num1 * this.Num2;
  }

  division() {
    this.result = this.Num1 / this.Num2;
  }

  clear() {
    this.Num1 = 0;
    this.Num2 = 0;
    this.result = 0;
  }
}
