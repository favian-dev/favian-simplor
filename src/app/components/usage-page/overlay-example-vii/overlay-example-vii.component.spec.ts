import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayExampleViiComponent } from './overlay-example-vii.component';

describe('OverlayExampleViiComponent', () => {
  let component: OverlayExampleViiComponent;
  let fixture: ComponentFixture<OverlayExampleViiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OverlayExampleViiComponent]
    });
    fixture = TestBed.createComponent(OverlayExampleViiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
