import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDrawerIiComponent } from './test-drawer-ii.component';

describe('TestDrawerIiComponent', () => {
  let component: TestDrawerIiComponent;
  let fixture: ComponentFixture<TestDrawerIiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestDrawerIiComponent]
    });
    fixture = TestBed.createComponent(TestDrawerIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
