import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsagePageComponent } from './usage-page.component';

describe('UsagePageComponent', () => {
  let component: UsagePageComponent;
  let fixture: ComponentFixture<UsagePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsagePageComponent]
    });
    fixture = TestBed.createComponent(UsagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
