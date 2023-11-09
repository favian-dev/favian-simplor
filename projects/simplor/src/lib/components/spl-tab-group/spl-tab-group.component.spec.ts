import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplTabGroupComponent } from './spl-tab-group.component';

describe('SplTabGroupComponent', () => {
  let component: SplTabGroupComponent;
  let fixture: ComponentFixture<SplTabGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplTabGroupComponent]
    });
    fixture = TestBed.createComponent(SplTabGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
