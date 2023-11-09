import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplOverlayOutletComponent } from './spl-overlay-outlet.component';

describe('SplOverlayOutletComponent', () => {
  let component: SplOverlayOutletComponent;
  let fixture: ComponentFixture<SplOverlayOutletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplOverlayOutletComponent]
    });
    fixture = TestBed.createComponent(SplOverlayOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
