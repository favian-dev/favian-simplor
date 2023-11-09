import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExampleIiiComponent } from './modal-example-iii.component';

describe('ModalExampleIiiComponent', () => {
  let component: ModalExampleIiiComponent;
  let fixture: ComponentFixture<ModalExampleIiiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ModalExampleIiiComponent]
    });
    fixture = TestBed.createComponent(ModalExampleIiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
