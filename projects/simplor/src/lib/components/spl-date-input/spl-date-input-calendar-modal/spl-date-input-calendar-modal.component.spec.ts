import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplDateInputCalendarModalComponent } from './spl-date-input-calendar-modal.component';

describe('SplDateInputCalendarModalComponent', () => {
  let component: SplDateInputCalendarModalComponent;
  let fixture: ComponentFixture<SplDateInputCalendarModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplDateInputCalendarModalComponent],
    });
    fixture = TestBed.createComponent(SplDateInputCalendarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
