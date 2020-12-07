import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { JwtModuleOptions } from '@auth0/angular-jwt';

import { AuthInterceptorService } from './auth-interceptor.service';

export * from './auth.module';
export * from './auth-guard.service';
export * from './auth-interceptor.service';
export * from './auth.service';
export * from './login.state';

export function tokenGetter() {
  return sessionStorage.getItem('access_token');
}

export const jwtModuleOptions: JwtModuleOptions = {
  config: {
    tokenGetter
  }
};

export const authInterceptor = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptorService,
  multi: true
};
