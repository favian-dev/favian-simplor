import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOverlayIiComponent } from './test-overlay-ii.component';

describe('TestOverlayIiComponent', () => {
  let component: TestOverlayIiComponent;
  let fixture: ComponentFixture<TestOverlayIiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestOverlayIiComponent]
    });
    fixture = TestBed.createComponent(TestOverlayIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
