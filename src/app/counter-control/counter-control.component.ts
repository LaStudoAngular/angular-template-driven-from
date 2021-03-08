import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'td-counter-control',
  templateUrl: './counter-control.component.html',
  styleUrls: ['./counter-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CounterControlComponent),
      multi: true
    }
  ]
})
export class CounterControlComponent implements OnInit, ControlValueAccessor {
  @Input() value = 0;
  private step = 1;

  constructor() { }

  ngOnInit(): void {
    //
  }

  onChange(_: any) {}

  writeValue(value: number): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(): void {
    //
  }

  down(): void {
    this.value -= this.step;
  }

  up(): void {
    this.value += this.step;
  }

}
