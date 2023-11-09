import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestModalIvComponent } from './test-modal-iv.component';

describe('TestModalIvComponent', () => {
  let component: TestModalIvComponent;
  let fixture: ComponentFixture<TestModalIvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestModalIvComponent]
    });
    fixture = TestBed.createComponent(TestModalIvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
