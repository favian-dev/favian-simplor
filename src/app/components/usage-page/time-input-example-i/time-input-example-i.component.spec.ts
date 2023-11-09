import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeInputExampleIComponent } from './time-input-example-i.component';

describe('TimeInputExampleIComponent', () => {
  let component: TimeInputExampleIComponent;
  let fixture: ComponentFixture<TimeInputExampleIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TimeInputExampleIComponent]
    });
    fixture = TestBed.createComponent(TimeInputExampleIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
