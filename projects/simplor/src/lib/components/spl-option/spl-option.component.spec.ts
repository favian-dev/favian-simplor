import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplOptionComponent } from './spl-option.component';

describe('SplOptionComponent', () => {
  let component: SplOptionComponent;
  let fixture: ComponentFixture<SplOptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SplOptionComponent]
    });
    fixture = TestBed.createComponent(SplOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
