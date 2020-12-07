import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';

import { EventBusService } from '../event-bus.service';

import { LoginState } from './login.state';

export interface User {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'access_token';
  private redirectUrl = '/home';

  constructor(
    private http: HttpClient,
    private router: Router,
    private bus: EventBusService,
    private jwtHelper: JwtHelperService,
    @Inject('baseUrl') private baseUrl: string
  ) {}

  isLoggedIn() {
    const accessToken = localStorage.getItem(this.tokenKey);

    if (accessToken) {
      return !this.jwtHelper.isTokenExpired(accessToken);
    }

    return false;
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  userName() {
    const accessToken = localStorage.getItem(this.tokenKey);

    if (accessToken) {
      return this.jwtHelper.decodeToken(accessToken).email;
    }

    return '';
  }

  token() {
    const accessToken = localStorage.getItem(this.tokenKey);

    if (accessToken) {
      return accessToken;
    }

    return '';
  }

  login(email: string, password: string): Observable<User> {
    const url = `${this.baseUrl}/auth/login`;

    return this.http
      .post<User>(url, { email, password })
      .pipe(
        tap((res) => this.setSession(res)),
        tap((res) => this.publishUserName(res)),
        tap(() => this.redirect()),
        shareReplay()
      );
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.bus.publish('LoginState', LoginState.LoggedOut());
  }

  saveRedirectUrl(url: string): void {
    this.redirectUrl = url;
  }

  private setSession(authResult): void {
    localStorage.setItem(this.tokenKey, authResult.access_token);
  }

  private publishUserName(authResult): void {
    let token = {} as any;
    token = this.jwtHelper.decodeToken(authResult.access_token);

    this.bus.publish('LoginState', LoginState.LoggedIn(token.email));
  }

  private redirect(): void {
    const url = this.redirectUrl;
    this.redirectUrl = '/home';

    this.router.navigate([url]);
  }
}
