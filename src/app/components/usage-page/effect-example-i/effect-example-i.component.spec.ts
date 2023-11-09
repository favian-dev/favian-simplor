import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectExampleIComponent } from './effect-example-i.component';

describe('EffectExampleIComponent', () => {
  let component: EffectExampleIComponent;
  let fixture: ComponentFixture<EffectExampleIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EffectExampleIComponent]
    });
    fixture = TestBed.createComponent(EffectExampleIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
