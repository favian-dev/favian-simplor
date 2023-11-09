import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplModalWrapperComponent } from './spl-modal-wrapper.component';

describe('SplModalWrapperComponent', () => {
  let component: SplModalWrapperComponent;
  let fixture: ComponentFixture<SplModalWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SplModalWrapperComponent]
    });
    fixture = TestBed.createComponent(SplModalWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
