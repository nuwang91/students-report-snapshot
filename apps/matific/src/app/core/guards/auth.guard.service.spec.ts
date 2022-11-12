import { TestBed } from '@angular/core/testing';

import { NuguAuthGuardService } from './auth.guard.service';

describe('NuguAuthGuardService', () => {
  let service: NuguAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NuguAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
