import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplIconComponent } from './spl-icon.component';

describe('SplIconComponent', () => {
  let component: SplIconComponent;
  let fixture: ComponentFixture<SplIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplIconComponent]
    });
    fixture = TestBed.createComponent(SplIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
