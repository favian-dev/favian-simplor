import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableExampleIiComponent } from './table-example-ii.component';

describe('TableExampleIiComponent', () => {
  let component: TableExampleIiComponent;
  let fixture: ComponentFixture<TableExampleIiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TableExampleIiComponent]
    });
    fixture = TestBed.createComponent(TableExampleIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
