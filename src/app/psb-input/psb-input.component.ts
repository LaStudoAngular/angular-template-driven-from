import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'td-psb-input',
  templateUrl: './psb-input.component.html',
  styleUrls: ['./psb-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PsbInputComponent),
      multi: true
    }
  ]
})
export class PsbInputComponent implements OnInit, ControlValueAccessor {
  @Input() disable = false;

  private _value: string;
  private onChange = (value: string) => {};
  private onTouche = () => {};

  get value(): string {
    return this._value;
  }

  set value(value: string) {
    if (this._value === value) {
      return;
    }
    this._value = value;
    this.onChange(this.value);
    this.onTouche();
  }

  writeValue(outSideValue: string): void {
    this.value = outSideValue;
  }

  registerOnChange(fn: any): void {
    this.onChange(fn);
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouche();
  }

  setDisabledState(isDisabled: boolean): void {
    this.disable = isDisabled;
  }

  ngOnInit(): void {}

}
