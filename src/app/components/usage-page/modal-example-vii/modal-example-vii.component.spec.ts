import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExampleViiComponent } from './modal-example-vii.component';

describe('ModalExampleViiComponent', () => {
  let component: ModalExampleViiComponent;
  let fixture: ComponentFixture<ModalExampleViiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ModalExampleViiComponent]
    });
    fixture = TestBed.createComponent(ModalExampleViiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
