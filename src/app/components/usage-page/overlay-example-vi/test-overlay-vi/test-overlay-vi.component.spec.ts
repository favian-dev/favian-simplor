import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOverlayViComponent } from './test-overlay-vi.component';

describe('TestOverlayViComponent', () => {
  let component: TestOverlayViComponent;
  let fixture: ComponentFixture<TestOverlayViComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestOverlayViComponent]
    });
    fixture = TestBed.createComponent(TestOverlayViComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
