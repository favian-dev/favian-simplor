import { TestBed } from '@angular/core/testing';

import { SplModalService } from './spl-modal.service';

describe('SplModalService', () => {
  let service: SplModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SplModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
