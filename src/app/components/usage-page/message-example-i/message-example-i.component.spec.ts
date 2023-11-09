import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageExampleIComponent } from './message-example-i.component';

describe('MessageExampleIComponent', () => {
  let component: MessageExampleIComponent;
  let fixture: ComponentFixture<MessageExampleIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MessageExampleIComponent]
    });
    fixture = TestBed.createComponent(MessageExampleIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
