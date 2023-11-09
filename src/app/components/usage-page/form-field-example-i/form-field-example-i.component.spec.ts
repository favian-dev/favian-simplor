import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldExampleIComponent } from './form-field-example-i.component';

describe('FormFieldExampleIComponent', () => {
  let component: FormFieldExampleIComponent;
  let fixture: ComponentFixture<FormFieldExampleIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormFieldExampleIComponent]
    });
    fixture = TestBed.createComponent(FormFieldExampleIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
