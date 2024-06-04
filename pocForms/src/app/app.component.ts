import { CommonModule } from '@angular/common';
import { profileForm } from './test-data/profileForm';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { LibDynamicFormComponent } from '@lib/lib-dynamic-form/lib-dynamic-form.component';
import { InputNumberComponent } from '@lib/input-number/input-number.component';
import { PrimeInputTextComponent } from '@lib/prime-input-text/prime-input-text.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    LibDynamicFormComponent,
    FormsModule,
    ReactiveFormsModule,
    InputNumberComponent,
    PrimeInputTextComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private fb: FormBuilder) {}

  title = 'pocForms';
  profileForm = [...profileForm];

  form1 = {
    name: 'form1',
    surname: null,
  };

  onSubmit1() {
    console.log(this.form1);
  }

  form2 = this.fb.group({
    name: ['', Validators.required],
    surname: ['', [Validators.required,]],
  });

  onSubmit2() {
    console.log(this.form2);
  }

  form3 = this.fb.group({
    name: ['', Validators.required],
    number: ['', [Validators.required,]],
  });

  onSubmit3() {
    console.log(this.form2);
  }
}
