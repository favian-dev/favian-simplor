import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerExampleViComponent } from './drawer-example-vi.component';

describe('DrawerExampleVComponent', () => {
  let component: DrawerExampleViComponent;
  let fixture: ComponentFixture<DrawerExampleViComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DrawerExampleViComponent],
    });
    fixture = TestBed.createComponent(DrawerExampleViComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
