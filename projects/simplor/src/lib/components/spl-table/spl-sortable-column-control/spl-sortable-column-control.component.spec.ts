import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplSortableColumnControlComponent } from './spl-sortable-column-control.component';

describe('SplSortableColumnControlComponent', () => {
  let component: SplSortableColumnControlComponent;
  let fixture: ComponentFixture<SplSortableColumnControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplSortableColumnControlComponent]
    });
    fixture = TestBed.createComponent(SplSortableColumnControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
