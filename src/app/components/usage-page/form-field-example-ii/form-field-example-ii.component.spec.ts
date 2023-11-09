import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldExampleIiComponent } from './form-field-example-ii.component';

describe('FormFieldExampleIiComponent', () => {
  let component: FormFieldExampleIiComponent;
  let fixture: ComponentFixture<FormFieldExampleIiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormFieldExampleIiComponent]
    });
    fixture = TestBed.createComponent(FormFieldExampleIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
