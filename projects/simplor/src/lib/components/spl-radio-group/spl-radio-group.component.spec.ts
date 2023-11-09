import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplRadioGroupComponent } from './spl-radio-group.component';

describe('SplRadioGroupComponent', () => {
  let component: SplRadioGroupComponent;
  let fixture: ComponentFixture<SplRadioGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplRadioGroupComponent]
    });
    fixture = TestBed.createComponent(SplRadioGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
