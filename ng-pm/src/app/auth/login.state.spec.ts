import { LoginState } from './login.state';

describe('LoginState', () => {
  it('should create logged in state', () => {
    const loginState = LoginState.LoggedIn('John Doe');

    expect(loginState.userName).toBe('John Doe');
    expect(loginState.routerLink).toBe('/logout');
  });

  it('should create logged out state', () => {
    const loginState = LoginState.LoggedOut();

    expect(loginState.userName).toBe('Log in');
    expect(loginState.routerLink).toBe('/login');
  });

  it('should load from auth state when not logged in', () => {
    const loginState = LoginState.Load(false, 'John Doe');

    expect(loginState.userName).toBe('Log in');
    expect(loginState.routerLink).toBe('/login');
  });

  it('should load from auth state when logged in', () => {
    const loginState = LoginState.Load(true, 'John Doe');

    expect(loginState.userName).toBe('John Doe');
    expect(loginState.routerLink).toBe('/logout');
  });
});
