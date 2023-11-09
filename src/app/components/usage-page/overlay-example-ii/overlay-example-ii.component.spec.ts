import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayExampleIiComponent } from './overlay-example-ii.component';

describe('OverlayExampleIiComponent', () => {
  let component: OverlayExampleIiComponent;
  let fixture: ComponentFixture<OverlayExampleIiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OverlayExampleIiComponent]
    });
    fixture = TestBed.createComponent(OverlayExampleIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
