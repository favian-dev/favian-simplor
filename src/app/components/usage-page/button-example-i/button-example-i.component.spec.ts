import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonExampleIComponent } from './button-example-i.component';

describe('ButtonExampleIComponent', () => {
  let component: ButtonExampleIComponent;
  let fixture: ComponentFixture<ButtonExampleIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ButtonExampleIComponent]
    });
    fixture = TestBed.createComponent(ButtonExampleIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
