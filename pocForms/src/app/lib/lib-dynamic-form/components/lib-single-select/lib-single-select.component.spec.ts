import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibSingleSelectComponent } from './lib-single-select.component';

describe('LibSingleSelectComponent', () => {
  let component: LibSingleSelectComponent;
  let fixture: ComponentFixture<LibSingleSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibSingleSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibSingleSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
