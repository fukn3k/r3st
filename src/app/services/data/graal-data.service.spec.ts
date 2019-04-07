import { TestBed } from '@angular/core/testing';

import { GraalDataService } from './graal-data.service';

describe('GraalDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GraalDataService = TestBed.get(GraalDataService);
    expect(service).toBeTruthy();
  });
});
