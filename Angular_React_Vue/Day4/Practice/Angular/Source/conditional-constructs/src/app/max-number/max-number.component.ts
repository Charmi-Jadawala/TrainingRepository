import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-max-number',
  templateUrl: './max-number.component.html',
  styleUrls: ['./max-number.component.css']
})
export class MaxNumberComponent implements OnInit {
  Num1: number = 0;
  Num2: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  get MaxNo(){
      if (this.Num1 >= this.Num2){
          return true;
      }
      else{
          return false;
      }
  }

}
