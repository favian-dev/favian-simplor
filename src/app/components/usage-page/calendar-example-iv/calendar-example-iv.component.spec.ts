import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarExampleIvComponent } from './calendar-example-iv.component';

describe('CalendarExampleIiiiComponent', () => {
  let component: CalendarExampleIvComponent;
  let fixture: ComponentFixture<CalendarExampleIvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CalendarExampleIvComponent],
    });
    fixture = TestBed.createComponent(CalendarExampleIvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
