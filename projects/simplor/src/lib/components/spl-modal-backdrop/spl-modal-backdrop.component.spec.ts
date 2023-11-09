import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplModalBackdropComponent } from './spl-modal-backdrop.component';

describe('SplModalBackdropComponent', () => {
  let component: SplModalBackdropComponent;
  let fixture: ComponentFixture<SplModalBackdropComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SplModalBackdropComponent]
    });
    fixture = TestBed.createComponent(SplModalBackdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
