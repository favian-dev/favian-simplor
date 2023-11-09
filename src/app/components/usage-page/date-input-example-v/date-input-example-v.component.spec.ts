import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateInputExampleVComponent } from './date-input-example-v.component';

describe('DateInputExampleIvComponent', () => {
  let component: DateInputExampleVComponent;
  let fixture: ComponentFixture<DateInputExampleVComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DateInputExampleVComponent],
    });
    fixture = TestBed.createComponent(DateInputExampleVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
