import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplTimeInputComponent } from './spl-time-input.component';

describe('SplTimeInputComponent', () => {
  let component: SplTimeInputComponent;
  let fixture: ComponentFixture<SplTimeInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplTimeInputComponent]
    });
    fixture = TestBed.createComponent(SplTimeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
