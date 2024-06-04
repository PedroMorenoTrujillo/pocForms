import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputNumberModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputNumberComponent,
      multi: true
    }
  ]
})
export class InputNumberComponent implements ControlValueAccessor {
  @Input() public showButtons = true;
  @Input() public min = 0;
  @Input() public max = null;
  @Input() public step = 1;
  @Input() public prefix = '';
  @Input() public suffix = '';
  @Input() public mode = 'decimal';
  @Input() public buttonLayout = 'horizontal';
  @Input() public incrementButtonIcon = 'pi pi-angle-right';
  @Input() public decrementButtonIcon = 'pi pi-angle-left';
  @Input() public placeholder = '';
  @Input() public useGrouping = false;
  @Input() public onlyButtonsInput = false;
  public control: FormControl = new FormControl();


  public writeValue(value: number): void {
    this.control.setValue(value);
  }
  public registerOnChange(fn: any): void {
    this.control.valueChanges.subscribe(fn);
  }

  public registerOnTouched(fn: any): void {
    this.control.valueChanges.subscribe(() => fn());
  }

  public setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.control.disable() : this.control.enable();
  }
}
