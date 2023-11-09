import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplErrorComponent } from './spl-error.component';

describe('SplErrorComponent', () => {
  let component: SplErrorComponent;
  let fixture: ComponentFixture<SplErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplErrorComponent]
    });
    fixture = TestBed.createComponent(SplErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
