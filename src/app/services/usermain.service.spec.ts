import { TestBed } from '@angular/core/testing';

import { UsermainService } from './usermain.service';

describe('UsermainService', () => {
  let service: UsermainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsermainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
