import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { JwtHelperService } from '@auth0/angular-jwt';

import { EventBusService } from '../event-bus.service';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  const token = {
    access_token:
      // tslint:disable-next-line:max-line-length
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJydW5vQGVtYWlsLmNvbSIsInBhc3N3b3JkIjoiYnJ1bm8iLCJpYXQiOjE1MjgyNjc1MTQsImV4cCI6MTU3MTQ2NzUxNH0.YC2ncDMCSQ0LLaGR2fwa13GupASSqUhaV0byJtUkrmc'
  };

  const testEnvironmentProvider = { provide: 'baseUrl', useValue: 'http://localhost:3000' };
  const router = {
    navigate: jest.fn()
  };
  const jwtHelper = new JwtHelperService();

  let service: AuthService;
  let bus: EventBusService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthService,
        testEnvironmentProvider,
        { provide: Router, useValue: router },
        { provide: JwtHelperService, useValue: jwtHelper }
      ]
    });
  });

  beforeEach(() => {
    service = TestBed.inject(AuthService);
    bus = TestBed.inject(EventBusService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should return empty user name when not logged in', () => {
    expect(service.userName()).toBe('');
  });

  it('should return false for isLoggedIn when not logged in', () => {
    expect(service.isLoggedIn()).toBe(false);
  });

  it('should be logged in when providing the right credentials', () => {
    service.login('bruno@email.com', 'LetMeIn').subscribe(() => {
      expect(service.isLoggedIn()).toBe(true);
      expect(service.isLoggedOut()).toBe(false);
      expect(service.userName()).toBe('bruno@email.com');
    });

    const response = http.expectOne('http://localhost:3000/auth/login');
    expect(response.request.method).toEqual('POST');
    expect(response.request.body).toEqual({ email: 'bruno@email.com', password: 'LetMeIn' });

    response.flush(token);
  });

  it('should publish new login state when providing the right credentials', () => {
    service.login('bruno@email.com', 'LetMeIn').subscribe(() => {
      expect(service.isLoggedIn()).toBe(true);
    });

    bus.observe('LoginState').subscribe((state) => {
      expect(state.userName).toBe('bruno@email.com');
    });

    const response = http.expectOne('http://localhost:3000/auth/login');

    response.flush(token);
  });

  it('should clear local storage when logging out', () => {
    service.login('bruno@email.com', 'LetMeIn').subscribe(() => {
      expect(localStorage.length).toBeGreaterThanOrEqual(1);

      service.logout();

      expect(localStorage.length).toBe(0);
    });

    const response = http.expectOne('http://localhost:3000/auth/login');

    response.flush(token);
  });

  it('should publish new login state when logging out', () => {
    service.login('bruno@email.com', 'LetMeIn').subscribe(() => {
      expect(service.isLoggedIn()).toBe(true);

      bus.observe('LoginState').subscribe((state) => {
        expect(state.userName).toBe('Log in');
      });

      service.logout();
    });

    const response = http.expectOne('http://localhost:3000/auth/login');

    response.flush(token);
  });
});
