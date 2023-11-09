import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOverlayIComponent } from './test-overlay-i.component';

describe('TestOverlayIComponent', () => {
  let component: TestOverlayIComponent;
  let fixture: ComponentFixture<TestOverlayIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestOverlayIComponent]
    });
    fixture = TestBed.createComponent(TestOverlayIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
