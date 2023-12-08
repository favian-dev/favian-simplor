import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconExampleIiiComponent } from './icon-example-iii.component';

describe('IconExampleIiiComponent', () => {
  let component: IconExampleIiiComponent;
  let fixture: ComponentFixture<IconExampleIiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconExampleIiiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IconExampleIiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
