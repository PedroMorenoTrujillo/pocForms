import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibInputRadioComponent } from './lib-input-radio.component';

describe('LibInputRadioComponent', () => {
  let component: LibInputRadioComponent;
  let fixture: ComponentFixture<LibInputRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibInputRadioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibInputRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
