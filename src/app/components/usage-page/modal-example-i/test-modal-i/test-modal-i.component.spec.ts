import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestModalIComponent } from './test-modal-i.component';

describe('TestModalIComponent', () => {
  let component: TestModalIComponent;
  let fixture: ComponentFixture<TestModalIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestModalIComponent]
    });
    fixture = TestBed.createComponent(TestModalIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
