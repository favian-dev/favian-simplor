import { TestBed } from '@angular/core/testing';

import { SplOverlayService } from './spl-overlay.service';

describe('SplOverlayService', () => {
  let service: SplOverlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SplOverlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
