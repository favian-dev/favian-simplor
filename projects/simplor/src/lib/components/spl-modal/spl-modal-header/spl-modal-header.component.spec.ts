import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplModalHeaderComponent } from './spl-modal-header.component';

describe('SplModalHeaderComponent', () => {
  let component: SplModalHeaderComponent;
  let fixture: ComponentFixture<SplModalHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplModalHeaderComponent]
    });
    fixture = TestBed.createComponent(SplModalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
