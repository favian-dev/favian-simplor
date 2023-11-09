import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupExampleIvComponent } from './tab-group-example-iv.component';

describe('TabGroupExampleIvComponent', () => {
  let component: TabGroupExampleIvComponent;
  let fixture: ComponentFixture<TabGroupExampleIvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TabGroupExampleIvComponent]
    });
    fixture = TestBed.createComponent(TabGroupExampleIvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
