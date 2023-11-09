import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplModalContentComponent } from './spl-modal-content.component';

describe('SplModalContentComponent', () => {
  let component: SplModalContentComponent;
  let fixture: ComponentFixture<SplModalContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplModalContentComponent]
    });
    fixture = TestBed.createComponent(SplModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
