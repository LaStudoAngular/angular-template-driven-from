import { Component, forwardRef, Input } from '@angular/core';
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
export class PsbInputComponent implements ControlValueAccessor {
  @Input() disable = false;

  private _value: string;
  private onChange = (value: string) => {};
  onTouche = () => {};

  get value(): string {
    return this._value;
  }

  set value(newValue: string) {
    if (this._value === newValue) {
      return;
    }
    this._value = newValue;
    this.onChange(this._value);
    this.onTouche();
  }

  updateValue(insideValue: string): void {
    this.value = insideValue;
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

}
