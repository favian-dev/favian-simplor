import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestModalComponent } from './test-modal.component';

describe('TestModalComponent', () => {
  let component: TestModalComponent;
  let fixture: ComponentFixture<TestModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestModalComponent]
    });
    fixture = TestBed.createComponent(TestModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
