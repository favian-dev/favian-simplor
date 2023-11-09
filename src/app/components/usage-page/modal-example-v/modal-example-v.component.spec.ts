import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExampleVComponent } from './modal-example-v.component';

describe('ModalExampleVComponent', () => {
  let component: ModalExampleVComponent;
  let fixture: ComponentFixture<ModalExampleVComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ModalExampleVComponent]
    });
    fixture = TestBed.createComponent(ModalExampleVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
