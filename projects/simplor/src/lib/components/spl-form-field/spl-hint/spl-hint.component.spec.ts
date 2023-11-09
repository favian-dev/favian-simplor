import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplHintComponent } from './spl-hint.component';

describe('SplHintComponent', () => {
  let component: SplHintComponent;
  let fixture: ComponentFixture<SplHintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplHintComponent]
    });
    fixture = TestBed.createComponent(SplHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
