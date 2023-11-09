import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExampleViComponent } from './modal-example-vi.component';

describe('ModalExampleViComponent', () => {
  let component: ModalExampleViComponent;
  let fixture: ComponentFixture<ModalExampleViComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ModalExampleViComponent]
    });
    fixture = TestBed.createComponent(ModalExampleViComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
