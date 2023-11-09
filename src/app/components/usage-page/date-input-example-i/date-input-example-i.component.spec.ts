import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateInputExampleIComponent } from './date-input-example-i.component';

describe('DateInputExampleIComponent', () => {
  let component: DateInputExampleIComponent;
  let fixture: ComponentFixture<DateInputExampleIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DateInputExampleIComponent]
    });
    fixture = TestBed.createComponent(DateInputExampleIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
