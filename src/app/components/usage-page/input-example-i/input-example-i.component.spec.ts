import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputExampleIComponent } from './input-example-i.component';

describe('InputExampleIComponent', () => {
  let component: InputExampleIComponent;
  let fixture: ComponentFixture<InputExampleIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InputExampleIComponent]
    });
    fixture = TestBed.createComponent(InputExampleIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
