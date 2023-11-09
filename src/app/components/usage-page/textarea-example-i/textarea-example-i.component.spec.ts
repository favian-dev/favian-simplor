import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaExampleIComponent } from './textarea-example-i.component';

describe('TextareaExampleIComponent', () => {
  let component: TextareaExampleIComponent;
  let fixture: ComponentFixture<TextareaExampleIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TextareaExampleIComponent]
    });
    fixture = TestBed.createComponent(TextareaExampleIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
