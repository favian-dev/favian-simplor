import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalSliderExampleIComponent } from './horizontal-slider-example-i.component';

describe('HorizontalSliderExampleIComponent', () => {
  let component: HorizontalSliderExampleIComponent;
  let fixture: ComponentFixture<HorizontalSliderExampleIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HorizontalSliderExampleIComponent]
    });
    fixture = TestBed.createComponent(HorizontalSliderExampleIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
