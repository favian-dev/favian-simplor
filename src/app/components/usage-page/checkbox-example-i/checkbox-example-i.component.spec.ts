import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxExampleIComponent } from './checkbox-example-i.component';

describe('CheckboxIComponent', () => {
  let component: CheckboxExampleIComponent;
  let fixture: ComponentFixture<CheckboxExampleIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CheckboxExampleIComponent],
    });
    fixture = TestBed.createComponent(CheckboxExampleIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
