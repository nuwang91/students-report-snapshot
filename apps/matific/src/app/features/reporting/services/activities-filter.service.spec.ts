import { TestBed } from '@angular/core/testing';

import { NuguActivitiesFilterService } from './activities-filter.service';

describe('NuguActivitiesFilterService', () => {
  let service: NuguActivitiesFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NuguActivitiesFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
