import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplCalendarComponent } from './spl-calendar.component';

describe('SplCalendarComponent', () => {
  let component: SplCalendarComponent;
  let fixture: ComponentFixture<SplCalendarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplCalendarComponent]
    });
    fixture = TestBed.createComponent(SplCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
