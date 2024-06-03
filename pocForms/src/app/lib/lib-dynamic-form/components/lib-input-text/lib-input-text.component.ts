import { Component, Input } from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { DynamicFormModel } from '@lib/lib-dynamic-form/models';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormTypes } from '@lib/lib-dynamic-form/enums';

@Component({
  selector: 'lib-input-text',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    InputTextModule,
  ],
  templateUrl: './lib-input-text.component.html',
  styleUrl: './lib-input-text.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: LibInputTextComponent,
      multi: true,
    },
  ],
})
export class LibInputTextComponent implements ControlValueAccessor {
  @Input() item: DynamicFormModel | null = null;
  @Input() errorMessage: string | null = null;
  control: FormControl = new FormControl();
  formTypes = FormTypes;
  onChange: any = () => {};
  onTouch: any = () => {};

  writeValue(value: any): void {
    this.control.setValue(
      this.item?.type === FormTypes.NUMBER ? Number(value) : value
    );
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

  onBlur() {
    this.control.markAsTouched();
  }
}
