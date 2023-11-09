import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplToggleButtonComponent } from './spl-toggle-button.component';

describe('SplToggleButtonComponent', () => {
  let component: SplToggleButtonComponent;
  let fixture: ComponentFixture<SplToggleButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplToggleButtonComponent]
    });
    fixture = TestBed.createComponent(SplToggleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
