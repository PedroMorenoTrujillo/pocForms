import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { DynamicFormModel } from '@lib/lib-dynamic-form/models';
import { TranslateModule } from '@ngx-translate/core';
import { MultiSelectModule } from 'primeng/multiselect';
@Component({
  selector: 'lib-multi-select',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    MultiSelectModule,
  ],
  templateUrl: './lib-multi-select.component.html',
  styleUrl: './lib-multi-select.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: LibMultiSelectComponent,
      multi: true,
    },
  ],
})
export class LibMultiSelectComponent implements ControlValueAccessor {
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
