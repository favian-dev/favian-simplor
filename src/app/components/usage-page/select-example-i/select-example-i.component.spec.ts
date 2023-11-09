import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectExampleIComponent } from './select-example-i.component';

describe('SelectExampleIComponent', () => {
  let component: SelectExampleIComponent;
  let fixture: ComponentFixture<SelectExampleIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SelectExampleIComponent]
    });
    fixture = TestBed.createComponent(SelectExampleIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
