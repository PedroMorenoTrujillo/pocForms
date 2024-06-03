import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DynamicFormModel } from './models';
import { FormTypes } from './enums';
import { LibCalendarComponent } from './components/lib-calendar/lib-calendar.component';
import { LibCheckboxComponent } from './components/lib-checkbox/lib-checkbox.component';
import { LibInputTextAreaComponent } from './components/lib-input-text-area/lib-input-text-area.component';
import { LibInputTextComponent } from './components/lib-input-text/lib-input-text.component';
import { LibMultiSelectComponent } from './components/lib-multi-select/lib-multi-select.component';
import { LibSingleSelectComponent } from './components/lib-single-select/lib-single-select.component';
import { LibSwitchComponent } from './components/lib-switch/lib-switch.component';


@Component({
  selector: 'lib-dynamic-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    LibInputTextComponent,
    LibSwitchComponent,
    LibCheckboxComponent,
    LibCalendarComponent,
    LibInputTextAreaComponent,
    LibSingleSelectComponent,
    LibMultiSelectComponent,
  ],
  templateUrl: './lib-dynamic-form.component.html',
  styleUrl: './lib-dynamic-form.component.scss',
})
export class LibDynamicFormComponent implements OnChanges {
  @Input() dynamic: DynamicFormModel[] | null = null;
  dynamicForm!: FormGroup;
  formTypes = FormTypes;

  ngOnChanges(): void {
    if (this.dynamic) this.createForm();
  }

  createForm() {
    const form: { [key: string]: any } = {};
    this.dynamic?.forEach((item) => {
      if (item.formControlName)
        form[item.formControlName] = new FormControl(item.value);
    });
    this.dynamicForm = new FormGroup(form);
    this.addFormValidators();
  }

  addFormValidators() {
    this.dynamic?.forEach((item) => {
      if (item.required && item.formControlName)
        this.dynamicForm.controls[item.formControlName].addValidators(
          Validators.required
        );
      if (
        (item.type === FormTypes.TEXT || item.type === FormTypes.TEXTAREA) &&
        item.formControlName
      )
        this.dynamicForm.controls[item.formControlName].addValidators(
          Validators.minLength(3)
        );
      if (item.type === FormTypes.EMAIL && item.formControlName)
        this.dynamicForm.controls[item.formControlName].addValidators(
          Validators.email
        );
    });
  }

  getError(field: string) {
    const control = this.dynamicForm.get(field);
    if (control?.errors && control?.touched) {
      if (control?.errors?.['required']) {
        return 'Campo requerido';
      }
    }
    return '';
  }

  submit() {
    console.log(this.dynamicForm.value);
  }
}
