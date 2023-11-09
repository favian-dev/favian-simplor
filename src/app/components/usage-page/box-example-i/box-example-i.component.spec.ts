import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxExampleIComponent } from './box-example-i.component';

describe('BoxExampleIComponent', () => {
  let component: BoxExampleIComponent;
  let fixture: ComponentFixture<BoxExampleIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BoxExampleIComponent]
    });
    fixture = TestBed.createComponent(BoxExampleIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
