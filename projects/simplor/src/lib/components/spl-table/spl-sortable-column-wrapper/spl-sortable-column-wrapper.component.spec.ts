import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplSortableColumnWrapperComponent } from './spl-sortable-column-wrapper.component';

describe('SplSortableColumnWrapperComponent', () => {
  let component: SplSortableColumnWrapperComponent;
  let fixture: ComponentFixture<SplSortableColumnWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplSortableColumnWrapperComponent]
    });
    fixture = TestBed.createComponent(SplSortableColumnWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
