import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleButtonGroupExampleIiComponent } from './toggle-button-group-example-ii.component';

describe('ToggleButtonGroupExampleIiComponent', () => {
  let component: ToggleButtonGroupExampleIiComponent;
  let fixture: ComponentFixture<ToggleButtonGroupExampleIiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToggleButtonGroupExampleIiComponent]
    });
    fixture = TestBed.createComponent(ToggleButtonGroupExampleIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
