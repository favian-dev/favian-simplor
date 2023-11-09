import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplTabComponent } from './spl-tab.component';

describe('SplTabComponent', () => {
  let component: SplTabComponent;
  let fixture: ComponentFixture<SplTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplTabComponent]
    });
    fixture = TestBed.createComponent(SplTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
