import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplToggleButtonGroupComponent } from './spl-toggle-button-group.component';

describe('SplToggleButtonGroupComponent', () => {
  let component: SplToggleButtonGroupComponent;
  let fixture: ComponentFixture<SplToggleButtonGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplToggleButtonGroupComponent]
    });
    fixture = TestBed.createComponent(SplToggleButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
