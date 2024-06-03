import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  FormsModule,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import {DynamicFormModel} from '../../models/dynamic-form.model';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
@Component({
  selector: 'lib-calendar',
  standalone: true,
  imports: [CommonModule, TranslateModule, ReactiveFormsModule, FormsModule, CalendarModule],
  templateUrl: './lib-calendar.component.html',
  styleUrl: './lib-calendar.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: LibCalendarComponent,
      multi: true,
    },
  ],
})
export class LibCalendarComponent implements ControlValueAccessor {
  @Input() item: DynamicFormModel | null = null;
  @Input() errorMessage: string | null = null;
  control: FormControl = new FormControl();
  onChange: Function = (_: any) => {};
  onTouch: Function = () => {};

  clearDate(): void {
    this.control.setValue(null);
    this.onChange(null);
  }

  onDateChange(event: any): void {
    this.control.setValue(new Date(event).toLocaleDateString('es-ES'));
    this.onChange(new Date(event).toLocaleDateString('es-ES'));
  }

  writeValue(value: Date): void {
    if (value) {
      this.control.setValue(new Date(value).toLocaleDateString('es-ES'));
    } else {
      this.control.setValue(null);
    }
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
