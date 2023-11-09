import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplDrawerBackdropComponent } from './spl-drawer-backdrop.component';

describe('SplDrawerBackdropComponent', () => {
  let component: SplDrawerBackdropComponent;
  let fixture: ComponentFixture<SplDrawerBackdropComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SplDrawerBackdropComponent]
    });
    fixture = TestBed.createComponent(SplDrawerBackdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
