import { Component, Input } from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { DynamicFormModel } from '@lib/lib-dynamic-form/models';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'lib-checkbox',
  standalone: true,
  imports: [CommonModule, TranslateModule, ReactiveFormsModule, CheckboxModule],
  templateUrl: './lib-checkbox.component.html',
  styleUrl: './lib-checkbox.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: LibCheckboxComponent,
      multi: true,
    },
  ],
})
export class LibCheckboxComponent implements ControlValueAccessor {
  @Input() item: DynamicFormModel | null = null;
  @Input() errorMessage: string | null = null;
  control: FormControl = new FormControl();
  onChange: Function = (_: any) => {};
  onTouch: Function = () => {};

  writeValue(value: any): void {
    this.control.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.control.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.control.valueChanges.subscribe(() => fn());
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.control.disable() : this.control.enable();
  }
}
