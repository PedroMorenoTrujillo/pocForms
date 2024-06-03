import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibInputTextAreaComponent } from './lib-input-text-area.component';

describe('LibInputTextAreaComponent', () => {
  let component: LibInputTextAreaComponent;
  let fixture: ComponentFixture<LibInputTextAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibInputTextAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibInputTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
