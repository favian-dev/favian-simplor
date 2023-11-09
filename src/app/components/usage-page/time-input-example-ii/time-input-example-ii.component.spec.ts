import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeInputExampleIiComponent } from './time-input-example-ii.component';

describe('TimeInputExampleIiComponent', () => {
  let component: TimeInputExampleIiComponent;
  let fixture: ComponentFixture<TimeInputExampleIiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TimeInputExampleIiComponent]
    });
    fixture = TestBed.createComponent(TimeInputExampleIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
