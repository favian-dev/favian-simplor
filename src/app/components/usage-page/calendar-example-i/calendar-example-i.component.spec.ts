import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarExampleIComponent } from './calendar-example-i.component';

describe('CalendarExampleIComponent', () => {
  let component: CalendarExampleIComponent;
  let fixture: ComponentFixture<CalendarExampleIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CalendarExampleIComponent]
    });
    fixture = TestBed.createComponent(CalendarExampleIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
