import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplPaginatorComponent } from './spl-paginator.component';

describe('SplPaginatorComponent', () => {
  let component: SplPaginatorComponent;
  let fixture: ComponentFixture<SplPaginatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplPaginatorComponent]
    });
    fixture = TestBed.createComponent(SplPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
