import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlValidatorExampleIComponent } from './control-validator-example-i.component';

describe('ControlValidatorExampleIComponent', () => {
  let component: ControlValidatorExampleIComponent;
  let fixture: ComponentFixture<ControlValidatorExampleIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ControlValidatorExampleIComponent]
    });
    fixture = TestBed.createComponent(ControlValidatorExampleIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
