import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableExampleIComponent } from './table-example-i.component';

describe('TableExampleIComponent', () => {
  let component: TableExampleIComponent;
  let fixture: ComponentFixture<TableExampleIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TableExampleIComponent]
    });
    fixture = TestBed.createComponent(TableExampleIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
