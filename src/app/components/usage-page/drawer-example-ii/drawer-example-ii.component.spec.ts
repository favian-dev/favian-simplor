import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerExampleIiComponent } from './drawer-example-ii.component';

describe('DrawerExampleIiComponent', () => {
  let component: DrawerExampleIiComponent;
  let fixture: ComponentFixture<DrawerExampleIiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DrawerExampleIiComponent]
    });
    fixture = TestBed.createComponent(DrawerExampleIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
