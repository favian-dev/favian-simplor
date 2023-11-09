import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayExampleIComponent } from './overlay-example-i.component';

describe('OverlayExampleIComponent', () => {
  let component: OverlayExampleIComponent;
  let fixture: ComponentFixture<OverlayExampleIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OverlayExampleIComponent]
    });
    fixture = TestBed.createComponent(OverlayExampleIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
