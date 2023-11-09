import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOverlayViiComponent } from './test-overlay-vii.component';

describe('TestOverlayViiComponent', () => {
  let component: TestOverlayViiComponent;
  let fixture: ComponentFixture<TestOverlayViiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestOverlayViiComponent]
    });
    fixture = TestBed.createComponent(TestOverlayViiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
