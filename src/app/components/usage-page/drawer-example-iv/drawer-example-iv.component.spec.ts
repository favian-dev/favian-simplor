import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerExampleIvComponent } from './drawer-example-iv.component';

describe('DrawerExampleIiiiComponent', () => {
  let component: DrawerExampleIvComponent;
  let fixture: ComponentFixture<DrawerExampleIvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DrawerExampleIvComponent],
    });
    fixture = TestBed.createComponent(DrawerExampleIvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
