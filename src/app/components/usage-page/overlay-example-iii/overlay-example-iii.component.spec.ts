import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayExampleIiiComponent } from './overlay-example-iii.component';

describe('OverlayExampleIiiComponent', () => {
  let component: OverlayExampleIiiComponent;
  let fixture: ComponentFixture<OverlayExampleIiiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OverlayExampleIiiComponent]
    });
    fixture = TestBed.createComponent(OverlayExampleIiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
