import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibInputTextComponent } from './lib-input-text.component';

describe('LibInputTextComponent', () => {
  let component: LibInputTextComponent;
  let fixture: ComponentFixture<LibInputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibInputTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
