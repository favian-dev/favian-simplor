import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOverlayIiiComponent } from './test-overlay-iii.component';

describe('TestOverlayIiiComponent', () => {
  let component: TestOverlayIiiComponent;
  let fixture: ComponentFixture<TestOverlayIiiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestOverlayIiiComponent]
    });
    fixture = TestBed.createComponent(TestOverlayIiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
