import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplDateInputComponent } from './spl-date-input.component';

describe('SplDateInputComponent', () => {
  let component: SplDateInputComponent;
  let fixture: ComponentFixture<SplDateInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplDateInputComponent],
    });
    fixture = TestBed.createComponent(SplDateInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
