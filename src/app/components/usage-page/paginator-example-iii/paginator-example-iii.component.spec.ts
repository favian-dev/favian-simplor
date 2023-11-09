import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorExampleIiiComponent } from './paginator-example-iii.component';

describe('PaginatorExampleIiiComponent', () => {
  let component: PaginatorExampleIiiComponent;
  let fixture: ComponentFixture<PaginatorExampleIiiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PaginatorExampleIiiComponent]
    });
    fixture = TestBed.createComponent(PaginatorExampleIiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
