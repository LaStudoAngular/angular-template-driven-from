import { Component, forwardRef, Input } from '@angular/core';
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
export class CounterControlComponent implements ControlValueAccessor {
  @Input() step = 1;
  private _value = 0;

  get value(): number {
    return this._value;
  }

  onChange(_: any) {}

  writeValue(value: number): void {
    this._value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(): void {
    //
  }

  down(): void {
    this._value -= this.step;
  }

  up(): void {
    this._value += this.step;
  }

}
