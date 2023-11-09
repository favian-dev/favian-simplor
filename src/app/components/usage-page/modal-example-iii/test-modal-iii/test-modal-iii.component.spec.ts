import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestModalIiiComponent } from './test-modal-iii.component';

describe('TestModalIiiComponent', () => {
  let component: TestModalIiiComponent;
  let fixture: ComponentFixture<TestModalIiiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestModalIiiComponent]
    });
    fixture = TestBed.createComponent(TestModalIiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
