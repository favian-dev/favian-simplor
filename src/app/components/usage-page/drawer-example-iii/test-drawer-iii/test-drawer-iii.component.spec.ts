import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDrawerIiiComponent } from './test-drawer-iii.component';

describe('TestDrawerIiiComponent', () => {
  let component: TestDrawerIiiComponent;
  let fixture: ComponentFixture<TestDrawerIiiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestDrawerIiiComponent]
    });
    fixture = TestBed.createComponent(TestDrawerIiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
