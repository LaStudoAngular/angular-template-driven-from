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

  onTouchedCallback = () => {};
  private innerValue: string;
  private onChangeCallback = (_: any) => {};

  get value(): string {
    return this.innerValue;
  }

  set value(newValue: string) {
    if (this.innerValue !== newValue) {
      this.innerValue = newValue;
      this.onChangeCallback(this.innerValue);
      this.onTouchedCallback();
    }
  }

  updateValue(insideValue: string): void {
    this.value = insideValue;
  }

  writeValue(outsideValue: string): void {
    this.value = outsideValue;
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disable = isDisabled;
  }

}
