import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestModalVComponent } from './test-modal-v.component';

describe('TestModalVComponent', () => {
  let component: TestModalVComponent;
  let fixture: ComponentFixture<TestModalVComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestModalVComponent]
    });
    fixture = TestBed.createComponent(TestModalVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
