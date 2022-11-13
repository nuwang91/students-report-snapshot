import { TestBed } from '@angular/core/testing';

import { NuguSpinnerService } from './spinner.service';

describe('NuguSpinnerService', () => {
  let service: NuguSpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NuguSpinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
