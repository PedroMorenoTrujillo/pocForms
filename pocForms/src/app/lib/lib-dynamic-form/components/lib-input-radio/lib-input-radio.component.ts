import { Component, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
@Component({
  selector: 'lib-input-radio',
  standalone: true,
  imports: [RadioButtonModule],
  templateUrl: './lib-input-radio.component.html',
  styleUrl: './lib-input-radio.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: LibInputRadioComponent,
      multi: true,
    },
  ],
})
export class LibInputRadioComponent implements ControlValueAccessor {
  @Input() item: any;
  itemValue: any = null;
  onChange: Function = (_: any) => {};
  onTouch: Function = () => {};
  writeValue(value: any): void {
    this.itemValue = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {}
}

