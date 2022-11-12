import { TestBed } from '@angular/core/testing';

import { NuguAuthenticationService } from './authentication.service';

describe('NuguAuthenticationService', () => {
  let service: NuguAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NuguAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
