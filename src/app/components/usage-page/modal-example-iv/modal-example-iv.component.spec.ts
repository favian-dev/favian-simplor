import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExampleIvComponent } from './modal-example-iv.component';

describe('ModalExampleIiiiComponent', () => {
  let component: ModalExampleIvComponent;
  let fixture: ComponentFixture<ModalExampleIvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ModalExampleIvComponent],
    });
    fixture = TestBed.createComponent(ModalExampleIvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
