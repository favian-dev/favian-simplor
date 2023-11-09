import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplEffectOverlayComponent } from './spl-effect-overlay.component';

describe('SplEffectOverlayComponent', () => {
  let component: SplEffectOverlayComponent;
  let fixture: ComponentFixture<SplEffectOverlayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SplEffectOverlayComponent]
    });
    fixture = TestBed.createComponent(SplEffectOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
