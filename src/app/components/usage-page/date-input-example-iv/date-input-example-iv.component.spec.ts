import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateInputExampleIvComponent } from './date-input-example-iv.component';

describe('DateInputExampleIiiiComponent', () => {
  let component: DateInputExampleIvComponent;
  let fixture: ComponentFixture<DateInputExampleIvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DateInputExampleIvComponent],
    });
    fixture = TestBed.createComponent(DateInputExampleIvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
