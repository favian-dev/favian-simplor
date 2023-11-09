import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerExampleVComponent } from './drawer-example-v.component';

describe('DrawerExampleIvComponent', () => {
  let component: DrawerExampleVComponent;
  let fixture: ComponentFixture<DrawerExampleVComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DrawerExampleVComponent],
    });
    fixture = TestBed.createComponent(DrawerExampleVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
