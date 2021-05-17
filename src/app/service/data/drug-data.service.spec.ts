import { TestBed } from '@angular/core/testing';

import { DrugDataService } from './drug-data.service';

describe('DrugDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrugDataService = TestBed.get(DrugDataService);
    expect(service).toBeTruthy();
  });
});
