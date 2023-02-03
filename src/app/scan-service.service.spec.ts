import { TestBed } from '@angular/core/testing';

import { ScanServiceService } from './scan-service.service';

describe('ScanServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScanServiceService = TestBed.get(ScanServiceService);
    expect(service).toBeTruthy();
  });
});
