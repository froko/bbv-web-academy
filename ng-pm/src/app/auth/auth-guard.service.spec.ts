import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';

describe('AuthGuardService', () => {
  const authService = {
    isLoggedIn: jest.fn(),
    saveRedirectUrl: jest.fn()
  };

  const router = {
    navigate: jest.fn()
  };

  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        AuthGuardService,
        { provide: AuthService, useValue: authService },
        { provide: Router, useValue: router }
      ]
    })
  );

  it('should be created', () => {
    const service: AuthGuardService = TestBed.inject(AuthGuardService);
    expect(service).toBeTruthy();
  });
});
