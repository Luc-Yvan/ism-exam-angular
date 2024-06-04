import { TestBed } from '@angular/core/testing';

import { InscritsService } from './inscrits.service.impl';

describe('InscritsService', () => {
  let service: InscritsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InscritsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
