import { TestBed } from '@angular/core/testing';

import { IncomeDataService } from './income-data.service';

describe('IncomeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IncomeDataService = TestBed.get(IncomeDataService);
    expect(service).toBeTruthy();
  });
});
