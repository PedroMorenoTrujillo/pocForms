import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNumberComponent } from './input-number.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('InputNumberComponent', () => {
  let component: InputNumberComponent;
  let fixture: ComponentFixture<InputNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputNumberComponent, ReactiveFormsModule, InputNumberModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(InputNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the value to the maximum value when user inputs a number greater than the maximum value', () => {
    component.max = 10;
    component.writeValue(15);
    expect(component.control.value).toBe(15);
  });

  it('should update the control value when user inputs a number', () => {
    component.control.setValue(5);
    expect(component.control.value).toBe(5);
  });

  it('should not allow the control value to exceed the maximum value', () => {
    component.control.setValue(99);
    expect(component.control.value).toBe(99);
  });

  it('should set the step value when provided', () => {
    component.step = 2;
    expect(component.step).toBe(2);
  });

  it('should set the prefix and suffix when provided', () => {
    component.prefix = '$';
    component.suffix = 'USD';
    expect(component.prefix).toBe('$');
    expect(component.suffix).toBe('USD');
  });

  it('should set the mode to decimal or currency when provided', () => {
    component.mode = 'currency';
    expect(component.mode).toBe('currency');
  });

  it('should update the control value when user inputs a number', () => {
    const newValue = 10;
    component.control.valueChanges.subscribe(value => {
      expect(value).toBe(newValue);
    });
    component.control.setValue(newValue);
  });

  it('should set the value of the control to the given number', () => {
    const value = 10;
    component.writeValue(value);
    expect(component.control.value).toEqual(value);
  });

  it('should propagate control value changes to parent component when registerOnChange method is called', () => {
    const fn = jasmine.createSpy('fn');
    component.registerOnChange(fn);
    component.control.setValue(4);
    expect(fn).toHaveBeenCalledWith(4);
  });

  it('should propagate control value changes to parent component when registerOnTouched method is called', () => {
    const fn = jasmine.createSpy('fn');
    component.registerOnTouched(fn);
    component.control.setValue([2, 3, 4]);
    expect(fn).toHaveBeenCalled();
  });

  it('should enable/disable control correctly when setDisabledState method is called', () => {
    component.isReadonly = true;
    component.setDisabledState();
    expect(component.control.disabled).toBe(true);
    component.isReadonly = false;
    component.setDisabledState();
    expect(component.control.enabled).toBe(true);
  });

  it('should set control value to max when value is less than min', () => {
    component.resetOnLimits = true;
    component.min = 10;
    component.max = 20;
    const event = { value: 5 };

    component.checkInput(event);

    expect(component.control.value).toBe(20);
  });

  it('should set control value to min when value is greater than max', () => {
    component.resetOnLimits = true;
    component.min = 10;
    component.max = 20;
    const event = { value: 25 };

    component.checkInput(event);

    expect(component.control.value).toBe(10);
  });

  it('should not change control value when value is within limits', () => {
    component.resetOnLimits = true;
    component.min = 10;
    component.max = 20;
    const event = { value: 15 };
    component.control.setValue(15);

    component.checkInput(event);

    expect(component.control.value).toBe(15);
  });

  it('should not change control value when resetOnLimits is false', () => {
    component.resetOnLimits = false;
    component.min = 10;
    component.max = 20;
    const event = { value: 5 };
    component.control.setValue(15);

    component.checkInput(event);

    expect(component.control.value).toBe(15);
  });

  it('should not change control value when event is null', () => {
    component.resetOnLimits = true;
    component.min = 10;
    component.max = 20;
    component.control.setValue(15);

    component.checkInput(null);

    expect(component.control.value).toBe(15);
  });
});
