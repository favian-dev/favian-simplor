import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconExampleIiComponent } from './icon-example-ii.component';

describe('IconExampleIiComponent', () => {
  let component: IconExampleIiComponent;
  let fixture: ComponentFixture<IconExampleIiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IconExampleIiComponent]
    });
    fixture = TestBed.createComponent(IconExampleIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
