import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    if (this.authService.isLoggedIn()) {
      const authRequest = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${this.authService.token()}`)
      });

      return next.handle(authRequest);
    }

    return next.handle(request);
  }
}
