import { TestBed } from '@angular/core/testing';

import { NuguClassService } from './class.service';

describe('ClassService', () => {
  let service: NuguClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NuguClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
