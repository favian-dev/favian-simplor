import { TestBed } from '@angular/core/testing';

import { SplPositionTrackerService } from './spl-position-tracker.service';

describe('SplPositionTrackerService', () => {
  let service: SplPositionTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SplPositionTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
