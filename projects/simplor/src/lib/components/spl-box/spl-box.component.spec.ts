import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplBoxComponent } from './spl-box.component';

describe('SplBoxComponent', () => {
  let component: SplBoxComponent;
  let fixture: ComponentFixture<SplBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplBoxComponent]
    });
    fixture = TestBed.createComponent(SplBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
