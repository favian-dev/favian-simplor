import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayExampleIvComponent } from './overlay-example-iv.component';

describe('OverlayExampleIvComponent', () => {
  let component: OverlayExampleIvComponent;
  let fixture: ComponentFixture<OverlayExampleIvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OverlayExampleIvComponent]
    });
    fixture = TestBed.createComponent(OverlayExampleIvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
