import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconExampleIComponent } from './icon-example-i.component';

describe('IconExampleIComponent', () => {
  let component: IconExampleIComponent;
  let fixture: ComponentFixture<IconExampleIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IconExampleIComponent]
    });
    fixture = TestBed.createComponent(IconExampleIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
