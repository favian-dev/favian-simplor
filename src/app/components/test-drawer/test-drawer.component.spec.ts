import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDrawerComponent } from './test-drawer.component';

describe('TestDrawerComponent', () => {
  let component: TestDrawerComponent;
  let fixture: ComponentFixture<TestDrawerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestDrawerComponent]
    });
    fixture = TestBed.createComponent(TestDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
