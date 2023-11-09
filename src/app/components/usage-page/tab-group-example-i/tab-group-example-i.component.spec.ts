import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupExampleIComponent } from './tab-group-example-i.component';

describe('TabGroupExampleIComponent', () => {
  let component: TabGroupExampleIComponent;
  let fixture: ComponentFixture<TabGroupExampleIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TabGroupExampleIComponent]
    });
    fixture = TestBed.createComponent(TabGroupExampleIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
