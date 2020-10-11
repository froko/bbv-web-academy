import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { TimeService } from './time.service';

describe('TimeService', () => {
  const testEnvironmentProvider = { provide: 'baseUrl', useValue: 'http://localhost:3000' };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TimeService, testEnvironmentProvider]
    });
  });

  it('should be created', () => {
    const service: TimeService = TestBed.inject(TimeService);
    expect(service).toBeTruthy();
  });
});
