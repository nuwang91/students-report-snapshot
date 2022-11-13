import { TestBed } from '@angular/core/testing';

import { NuguDataResolverService } from './data-resolver.service';

describe('NuguDataResolverService', () => {
  let service: NuguDataResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NuguDataResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
