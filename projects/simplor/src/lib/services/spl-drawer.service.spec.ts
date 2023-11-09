import { TestBed } from '@angular/core/testing';

import { SplDrawerService } from './spl-drawer.service';

describe('SplDrawerService', () => {
  let service: SplDrawerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SplDrawerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
