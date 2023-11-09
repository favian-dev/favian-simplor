import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayExampleViComponent } from './overlay-example-vi.component';

describe('OverlayExampleViComponent', () => {
  let component: OverlayExampleViComponent;
  let fixture: ComponentFixture<OverlayExampleViComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OverlayExampleViComponent]
    });
    fixture = TestBed.createComponent(OverlayExampleViComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
