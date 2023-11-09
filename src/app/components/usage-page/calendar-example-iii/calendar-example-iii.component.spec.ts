import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarExampleIiiComponent } from './calendar-example-iii.component';

describe('CalendarExampleIiiComponent', () => {
  let component: CalendarExampleIiiComponent;
  let fixture: ComponentFixture<CalendarExampleIiiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CalendarExampleIiiComponent]
    });
    fixture = TestBed.createComponent(CalendarExampleIiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
