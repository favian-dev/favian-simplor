import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarExampleIComponent } from './progress-bar-example-i.component';

describe('ProgressBarExampleIComponent', () => {
  let component: ProgressBarExampleIComponent;
  let fixture: ComponentFixture<ProgressBarExampleIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProgressBarExampleIComponent]
    });
    fixture = TestBed.createComponent(ProgressBarExampleIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
