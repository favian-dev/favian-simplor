import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDrawerIvComponent } from './test-drawer-iv.component';

describe('TestDrawerIiiiComponent', () => {
  let component: TestDrawerIvComponent;
  let fixture: ComponentFixture<TestDrawerIvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestDrawerIvComponent],
    });
    fixture = TestBed.createComponent(TestDrawerIvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
