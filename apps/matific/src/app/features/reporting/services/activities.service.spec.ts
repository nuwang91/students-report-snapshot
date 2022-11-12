import { TestBed } from '@angular/core/testing';

import { NuguActivitiesService } from './activities.service';

describe('ActivitiesService', () => {
  let service: NuguActivitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NuguActivitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
