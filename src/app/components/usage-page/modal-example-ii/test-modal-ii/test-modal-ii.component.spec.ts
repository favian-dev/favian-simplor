import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestModalIiComponent } from './test-modal-ii.component';

describe('TestModalIiComponent', () => {
  let component: TestModalIiComponent;
  let fixture: ComponentFixture<TestModalIiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestModalIiComponent]
    });
    fixture = TestBed.createComponent(TestModalIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
