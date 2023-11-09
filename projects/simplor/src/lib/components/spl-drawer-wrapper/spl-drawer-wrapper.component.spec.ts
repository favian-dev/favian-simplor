import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplDrawerWrapperComponent } from './spl-drawer-wrapper.component';

describe('SplDrawerWrapperComponent', () => {
  let component: SplDrawerWrapperComponent;
  let fixture: ComponentFixture<SplDrawerWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SplDrawerWrapperComponent]
    });
    fixture = TestBed.createComponent(SplDrawerWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
