import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupExampleVComponent } from './tab-group-example-v.component';

describe('TabGroupExampleVComponent', () => {
  let component: TabGroupExampleVComponent;
  let fixture: ComponentFixture<TabGroupExampleVComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TabGroupExampleVComponent]
    });
    fixture = TestBed.createComponent(TabGroupExampleVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
