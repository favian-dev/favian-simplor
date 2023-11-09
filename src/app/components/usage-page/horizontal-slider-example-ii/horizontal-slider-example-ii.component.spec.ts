import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalSliderExampleIiComponent } from './horizontal-slider-example-ii.component';

describe('HorizontalSliderExampleIiComponent', () => {
  let component: HorizontalSliderExampleIiComponent;
  let fixture: ComponentFixture<HorizontalSliderExampleIiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HorizontalSliderExampleIiComponent]
    });
    fixture = TestBed.createComponent(HorizontalSliderExampleIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
