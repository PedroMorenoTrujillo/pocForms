import { Component, Input } from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { DynamicFormModel } from '../../models/dynamic-form.model';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'lib-switch',
  standalone: true,
  imports: [CommonModule, TranslateModule, ReactiveFormsModule],
  templateUrl: './lib-switch.component.html',
  styleUrl: './lib-switch.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: LibSwitchComponent,
      multi: true,
    },
  ],
})
export class LibSwitchComponent implements ControlValueAccessor {
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
