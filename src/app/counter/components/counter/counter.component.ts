import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Today's year is: {{ counter }}</h3>

    <button (click)="decreaseBy(1)">-</button>
    <button (click)="resetCounter(1745)">Reset</button>
    <button (click)="increaseBy(1)">+</button>
  `
})

export class CounterComponent {
  constructor() {
  }
  public counter:number = 2024;

  increaseBy( value:number ):void {
    this.counter += value;
  }

  decreaseBy( value:number ):void {
    this.counter -= value;
  }

  resetCounter( value:number ):void {
    this.counter = value;
  }
}
