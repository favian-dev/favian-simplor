import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerExampleIiiComponent } from './drawer-example-iii.component';

describe('DrawerExampleIiiComponent', () => {
  let component: DrawerExampleIiiComponent;
  let fixture: ComponentFixture<DrawerExampleIiiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DrawerExampleIiiComponent]
    });
    fixture = TestBed.createComponent(DrawerExampleIiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
