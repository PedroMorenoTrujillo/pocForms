import { profileForm } from './test-data/profileForm';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LibDynamicFormComponent } from '@lib/lib-dynamic-form/lib-dynamic-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LibDynamicFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pocForms';
  profileForm = [...profileForm];
}
