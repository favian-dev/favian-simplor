import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplFormFieldComponent } from './spl-form-field.component';

describe('SplFormFieldComponent', () => {
  let component: SplFormFieldComponent;
  let fixture: ComponentFixture<SplFormFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplFormFieldComponent]
    });
    fixture = TestBed.createComponent(SplFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
