import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDrawerIComponent } from './test-drawer-i.component';

describe('TestDrawerIComponent', () => {
  let component: TestDrawerIComponent;
  let fixture: ComponentFixture<TestDrawerIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestDrawerIComponent]
    });
    fixture = TestBed.createComponent(TestDrawerIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
