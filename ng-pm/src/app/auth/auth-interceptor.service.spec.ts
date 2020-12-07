import { TestBed } from '@angular/core/testing';

import { AuthInterceptorService } from './auth-interceptor.service';
import { AuthService } from './auth.service';

describe('AuthInterceptorService', () => {
  const authService = {
    token: jest.fn()
  };

  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [AuthInterceptorService, { provide: AuthService, useValue: authService }]
    })
  );

  it('should be created', () => {
    const service: AuthInterceptorService = TestBed.inject(AuthInterceptorService);
    expect(service).toBeTruthy();
  });
});
