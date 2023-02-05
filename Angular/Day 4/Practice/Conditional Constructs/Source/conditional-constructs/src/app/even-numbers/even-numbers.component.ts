import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-even-numbers',
  templateUrl: './even-numbers.component.html',
  styleUrls: ['./even-numbers.component.css']
})
export class EvenNumbersComponent implements OnInit {
  evenNumbers: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  myArray() {
    for(let i = 1; i <= 100; i ++){
      if(i % 2 == 0){
        this.evenNumbers.push(i);
      }
    }
  }

}
