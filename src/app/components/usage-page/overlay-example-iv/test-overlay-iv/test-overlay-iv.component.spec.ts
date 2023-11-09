import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOverlayIvComponent } from './test-overlay-iv.component';

describe('TestOverlayIvComponent', () => {
  let component: TestOverlayIvComponent;
  let fixture: ComponentFixture<TestOverlayIvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestOverlayIvComponent]
    });
    fixture = TestBed.createComponent(TestOverlayIvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
