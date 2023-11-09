import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioGroupExampleIiComponent } from './radio-group-example-ii.component';

describe('RadioGroupExampleIiComponent', () => {
  let component: RadioGroupExampleIiComponent;
  let fixture: ComponentFixture<RadioGroupExampleIiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RadioGroupExampleIiComponent]
    });
    fixture = TestBed.createComponent(RadioGroupExampleIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
