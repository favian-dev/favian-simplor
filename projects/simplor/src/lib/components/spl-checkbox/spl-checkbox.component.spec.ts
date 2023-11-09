import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplCheckboxComponent } from './spl-checkbox.component';

describe('SplCheckboxComponent', () => {
  let component: SplCheckboxComponent;
  let fixture: ComponentFixture<SplCheckboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplCheckboxComponent]
    });
    fixture = TestBed.createComponent(SplCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
