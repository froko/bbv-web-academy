import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { StatisticsService } from './statistics.service';

describe('StatisticsService', () => {
  const testEnvironmentProvider = { provide: 'baseUrl', useValue: 'http://localhost:3000' };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StatisticsService, testEnvironmentProvider]
    });
  });

  it('should be created', () => {
    const service: StatisticsService = TestBed.inject(StatisticsService);
    expect(service).toBeTruthy();
  });
});
