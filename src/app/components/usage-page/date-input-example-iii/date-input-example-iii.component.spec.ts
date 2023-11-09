import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateInputExampleIiiComponent } from './date-input-example-iii.component';

describe('DateInputExampleIiiComponent', () => {
  let component: DateInputExampleIiiComponent;
  let fixture: ComponentFixture<DateInputExampleIiiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DateInputExampleIiiComponent]
    });
    fixture = TestBed.createComponent(DateInputExampleIiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
