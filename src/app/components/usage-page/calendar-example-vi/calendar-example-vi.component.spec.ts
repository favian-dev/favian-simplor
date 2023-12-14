import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarExampleViComponent } from './calendar-example-vi.component';

describe('CalendarExampleViComponent', () => {
  let component: CalendarExampleViComponent;
  let fixture: ComponentFixture<CalendarExampleViComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarExampleViComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalendarExampleViComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
