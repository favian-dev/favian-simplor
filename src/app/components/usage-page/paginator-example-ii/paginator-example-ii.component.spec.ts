import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorExampleIiComponent } from './paginator-example-ii.component';

describe('PaginatorExampleIiComponent', () => {
  let component: PaginatorExampleIiComponent;
  let fixture: ComponentFixture<PaginatorExampleIiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PaginatorExampleIiComponent]
    });
    fixture = TestBed.createComponent(PaginatorExampleIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
