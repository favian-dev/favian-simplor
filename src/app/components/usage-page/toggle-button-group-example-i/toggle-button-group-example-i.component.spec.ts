import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleButtonGroupExampleIComponent } from './toggle-button-group-example-i.component';

describe('ToggleButtonGroupExampleIComponent', () => {
  let component: ToggleButtonGroupExampleIComponent;
  let fixture: ComponentFixture<ToggleButtonGroupExampleIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToggleButtonGroupExampleIComponent]
    });
    fixture = TestBed.createComponent(ToggleButtonGroupExampleIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
