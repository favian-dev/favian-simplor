import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioGroupExampleIComponent } from './radio-group-example-i.component';

describe('RadioGroupExampleIComponent', () => {
  let component: RadioGroupExampleIComponent;
  let fixture: ComponentFixture<RadioGroupExampleIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RadioGroupExampleIComponent]
    });
    fixture = TestBed.createComponent(RadioGroupExampleIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
