import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {
  number: number = 0;

  increase(){
    this.number +=1;
  }
  decrease(){
    this.number -=1;
  }
}

