import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

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
  parts: FormGroup;

  private _value: string;
  private onChange = (value: string) => {};
  private onTouche = () => {};

  get value(): string {
     return this.parts.value.custom;
  }

  set value(newValue: string) {
    if (this._value === newValue) {
      return;
    }
    this.parts.setValue({
      'custom': newValue
    });
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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.parts = this.fb.group({
      'custom': ['']
    })
  }

}
