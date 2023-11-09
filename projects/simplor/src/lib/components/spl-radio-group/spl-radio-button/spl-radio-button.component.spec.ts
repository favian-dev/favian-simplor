import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplRadioButtonComponent } from './spl-radio-button.component';

describe('SplRadioButtonComponent', () => {
  let component: SplRadioButtonComponent;
  let fixture: ComponentFixture<SplRadioButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplRadioButtonComponent]
    });
    fixture = TestBed.createComponent(SplRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
