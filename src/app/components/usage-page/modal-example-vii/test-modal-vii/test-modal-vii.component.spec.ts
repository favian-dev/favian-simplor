import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestModalViiComponent } from './test-modal-vii.component';

describe('TestModalViiComponent', () => {
  let component: TestModalViiComponent;
  let fixture: ComponentFixture<TestModalViiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestModalViiComponent]
    });
    fixture = TestBed.createComponent(TestModalViiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
