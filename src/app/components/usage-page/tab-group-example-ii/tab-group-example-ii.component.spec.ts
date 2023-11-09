import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupExampleIiComponent } from './tab-group-example-ii.component';

describe('TabGroupExampleIiComponent', () => {
  let component: TabGroupExampleIiComponent;
  let fixture: ComponentFixture<TabGroupExampleIiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TabGroupExampleIiComponent]
    });
    fixture = TestBed.createComponent(TabGroupExampleIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
