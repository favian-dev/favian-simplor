import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplFormFieldItemComponent } from './spl-form-field-item.component';

describe('SplFormFieldItemComponent', () => {
  let component: SplFormFieldItemComponent;
  let fixture: ComponentFixture<SplFormFieldItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SplFormFieldItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SplFormFieldItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
