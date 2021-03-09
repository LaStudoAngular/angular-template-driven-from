import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'td-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss'],
    providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => QuantityComponent),
    multi: true,
  }],
})
export class QuantityComponent implements ControlValueAccessor {
  private onChange = (value: any) => {};
  onTouched = () => console.log('input touched');
  value = 0;
  disabled = false;

  updateValue(insideValue: number) {
    this.value = insideValue;
    this.onChange(insideValue);
    this.onTouched();
  }

  writeValue(outsideValue: number) {
    this.value = outsideValue;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

}
