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
  private onTouched = () => {};
  private onChange = (_: number) => {};

  get value(): number {
    return this._value;
  }

  writeValue(outsideValue: number): void {
    this._value = outsideValue;
  }

  registerOnChange(fn: () => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  down(): void {
    this._value -= this.step;
    this.onChange(this._value);
    this.onTouched();
  }

  up(): void {
    this._value += this.step;
    this.onChange(this._value);
    this.onTouched();
  }

}
