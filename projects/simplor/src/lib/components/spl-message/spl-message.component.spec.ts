import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplMessageComponent } from './spl-message.component';

describe('SplMessageComponent', () => {
  let component: SplMessageComponent;
  let fixture: ComponentFixture<SplMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplMessageComponent]
    });
    fixture = TestBed.createComponent(SplMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
