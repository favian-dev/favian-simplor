import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplOptionsOverlayComponent } from './spl-options-overlay.component';

describe('SplOptionsOverlayComponent', () => {
  let component: SplOptionsOverlayComponent;
  let fixture: ComponentFixture<SplOptionsOverlayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SplOptionsOverlayComponent]
    });
    fixture = TestBed.createComponent(SplOptionsOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
