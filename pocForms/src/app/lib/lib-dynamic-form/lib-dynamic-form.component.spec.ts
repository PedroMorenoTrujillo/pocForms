import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibDynamicFormComponent } from './lib-dynamic-form.component';

describe('LibDynamicFormComponent', () => {
  let component: LibDynamicFormComponent;
  let fixture: ComponentFixture<LibDynamicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibDynamicFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
