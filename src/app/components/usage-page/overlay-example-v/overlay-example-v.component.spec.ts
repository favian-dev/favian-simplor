import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayExampleVComponent } from './overlay-example-v.component';

describe('OverlayExampleVComponent', () => {
  let component: OverlayExampleVComponent;
  let fixture: ComponentFixture<OverlayExampleVComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OverlayExampleVComponent]
    });
    fixture = TestBed.createComponent(OverlayExampleVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
