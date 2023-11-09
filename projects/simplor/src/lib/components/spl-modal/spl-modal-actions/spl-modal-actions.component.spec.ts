import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplModalActionsComponent } from './spl-modal-actions.component';

describe('SplModalActionsComponent', () => {
  let component: SplModalActionsComponent;
  let fixture: ComponentFixture<SplModalActionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplModalActionsComponent]
    });
    fixture = TestBed.createComponent(SplModalActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
