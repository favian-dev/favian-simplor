import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExampleIiComponent } from './modal-example-ii.component';

describe('ModalExampleIiComponent', () => {
  let component: ModalExampleIiComponent;
  let fixture: ComponentFixture<ModalExampleIiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ModalExampleIiComponent]
    });
    fixture = TestBed.createComponent(ModalExampleIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
