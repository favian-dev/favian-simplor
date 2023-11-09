import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDrawerVComponent } from './test-drawer-v.component';

describe('TestDrawerIvComponent', () => {
  let component: TestDrawerVComponent;
  let fixture: ComponentFixture<TestDrawerVComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestDrawerVComponent],
    });
    fixture = TestBed.createComponent(TestDrawerVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
