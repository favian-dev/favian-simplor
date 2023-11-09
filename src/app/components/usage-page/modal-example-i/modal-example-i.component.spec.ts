import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExampleIComponent } from './modal-example-i.component';

describe('ModalExampleIComponent', () => {
  let component: ModalExampleIComponent;
  let fixture: ComponentFixture<ModalExampleIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ModalExampleIComponent]
    });
    fixture = TestBed.createComponent(ModalExampleIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
