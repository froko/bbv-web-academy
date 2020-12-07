export class LoginState {
  constructor(public userName: string, public routerLink: string) {}

  static LoggedIn(userName: string): LoginState {
    return new LoginState(userName, '/logout');
  }

  static LoggedOut(): LoginState {
    return new LoginState('Log in', '/login');
  }

  static Load(isLoggedIn: boolean, userName: string): LoginState {
    if (isLoggedIn) {
      return LoginState.LoggedIn(userName);
    }

    return LoginState.LoggedOut();
  }
}
