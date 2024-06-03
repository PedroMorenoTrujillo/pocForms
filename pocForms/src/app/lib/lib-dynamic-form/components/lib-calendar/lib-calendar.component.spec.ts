import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibCalendarComponent } from './lib-calendar.component';

describe('LibCalendarComponent', () => {
  let component: LibCalendarComponent;
  let fixture: ComponentFixture<LibCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibCalendarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
