import { TestBed } from '@angular/core/testing';

import { SplMessageService } from './spl-message.service';

describe('SplMessageService', () => {
  let service: SplMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SplMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
