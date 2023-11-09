import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerExampleIComponent } from './drawer-example-i.component';

describe('DrawerExampleIComponent', () => {
  let component: DrawerExampleIComponent;
  let fixture: ComponentFixture<DrawerExampleIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DrawerExampleIComponent]
    });
    fixture = TestBed.createComponent(DrawerExampleIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
