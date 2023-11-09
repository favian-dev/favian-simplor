import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectExampleIiComponent } from './select-example-ii.component';

describe('SelectExampleIiComponent', () => {
  let component: SelectExampleIiComponent;
  let fixture: ComponentFixture<SelectExampleIiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SelectExampleIiComponent]
    });
    fixture = TestBed.createComponent(SelectExampleIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
