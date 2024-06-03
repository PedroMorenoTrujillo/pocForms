import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibSwitchComponent } from './lib-switch.component';

describe('LibSwitchComponent', () => {
  let component: LibSwitchComponent;
  let fixture: ComponentFixture<LibSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibSwitchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
