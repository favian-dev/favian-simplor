import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOverlayComponent } from './test-overlay.component';

describe('TestOverlayComponent', () => {
  let component: TestOverlayComponent;
  let fixture: ComponentFixture<TestOverlayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestOverlayComponent]
    });
    fixture = TestBed.createComponent(TestOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
