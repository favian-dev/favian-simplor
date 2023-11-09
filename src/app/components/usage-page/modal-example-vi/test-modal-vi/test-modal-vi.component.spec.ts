import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestModalViComponent } from './test-modal-vi.component';

describe('TestModalViComponent', () => {
  let component: TestModalViComponent;
  let fixture: ComponentFixture<TestModalViComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestModalViComponent]
    });
    fixture = TestBed.createComponent(TestModalViComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
