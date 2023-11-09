import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateInputExampleIiComponent } from './date-input-example-ii.component';

describe('DateInputExampleIiComponent', () => {
  let component: DateInputExampleIiComponent;
  let fixture: ComponentFixture<DateInputExampleIiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DateInputExampleIiComponent]
    });
    fixture = TestBed.createComponent(DateInputExampleIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
