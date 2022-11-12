import { TestBed } from '@angular/core/testing';

import { NuguReportDataService } from './report-data.service';

describe('ReportDataService', () => {
  let service: NuguReportDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NuguReportDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
