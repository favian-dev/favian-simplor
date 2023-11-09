import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOverlayVComponent } from './test-overlay-v.component';

describe('TestOverlayVComponent', () => {
  let component: TestOverlayVComponent;
  let fixture: ComponentFixture<TestOverlayVComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestOverlayVComponent]
    });
    fixture = TestBed.createComponent(TestOverlayVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
