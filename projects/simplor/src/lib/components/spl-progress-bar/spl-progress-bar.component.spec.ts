import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplProgressBarComponent } from './spl-progress-bar.component';

describe('SplProgressBarComponent', () => {
  let component: SplProgressBarComponent;
  let fixture: ComponentFixture<SplProgressBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplProgressBarComponent]
    });
    fixture = TestBed.createComponent(SplProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
