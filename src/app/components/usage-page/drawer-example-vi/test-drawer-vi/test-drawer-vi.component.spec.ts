import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDrawerViComponent } from './test-drawer-vi.component';

describe('TestDrawerVComponent', () => {
  let component: TestDrawerViComponent;
  let fixture: ComponentFixture<TestDrawerViComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestDrawerViComponent],
    });
    fixture = TestBed.createComponent(TestDrawerViComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
