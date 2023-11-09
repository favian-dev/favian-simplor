import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarExampleIiComponent } from './calendar-example-ii.component';

describe('CalendarExampleIiComponent', () => {
  let component: CalendarExampleIiComponent;
  let fixture: ComponentFixture<CalendarExampleIiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CalendarExampleIiComponent]
    });
    fixture = TestBed.createComponent(CalendarExampleIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
