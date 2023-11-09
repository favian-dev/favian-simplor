import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorExampleIComponent } from './paginator-example-i.component';

describe('PaginatorExampleIComponent', () => {
  let component: PaginatorExampleIComponent;
  let fixture: ComponentFixture<PaginatorExampleIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PaginatorExampleIComponent]
    });
    fixture = TestBed.createComponent(PaginatorExampleIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
