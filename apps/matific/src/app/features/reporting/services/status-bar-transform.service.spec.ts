import { TestBed } from '@angular/core/testing';

import { NuguStatusBarTransformService } from './status-bar-transform.service';

describe('NuguStatusBarTransformService', () => {
  let service: NuguStatusBarTransformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NuguStatusBarTransformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
