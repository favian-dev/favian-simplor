import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupExampleIiiComponent } from './tab-group-example-iii.component';

describe('TabGroupExampleIiiComponent', () => {
  let component: TabGroupExampleIiiComponent;
  let fixture: ComponentFixture<TabGroupExampleIiiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TabGroupExampleIiiComponent]
    });
    fixture = TestBed.createComponent(TabGroupExampleIiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
