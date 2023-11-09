import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplHorizontalSliderComponent } from './spl-horizontal-slider.component';

describe('SplHorizontalSliderComponent', () => {
  let component: SplHorizontalSliderComponent;
  let fixture: ComponentFixture<SplHorizontalSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplHorizontalSliderComponent]
    });
    fixture = TestBed.createComponent(SplHorizontalSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
