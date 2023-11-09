import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplSelectComponent } from './spl-select.component';

describe('SplSelectComponent', () => {
  let component: SplSelectComponent;
  let fixture: ComponentFixture<SplSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplSelectComponent]
    });
    fixture = TestBed.createComponent(SplSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
