import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarExampleVComponent } from './calendar-example-v.component';

describe('CalendarExampleIvComponent', () => {
  let component: CalendarExampleVComponent;
  let fixture: ComponentFixture<CalendarExampleVComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CalendarExampleVComponent],
    });
    fixture = TestBed.createComponent(CalendarExampleVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
