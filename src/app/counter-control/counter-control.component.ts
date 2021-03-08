import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'td-counter-control',
  templateUrl: './counter-control.component.html',
  styleUrls: ['./counter-control.component.scss']
})
export class CounterControlComponent implements OnInit {

  value: number;
  private step = 1;

  constructor() { }

  ngOnInit(): void {
    this.value = 0;
  }

  down(): void {
    this.value -= 1;
  }

  up(): void {
    this.value += 1;
  }

}
