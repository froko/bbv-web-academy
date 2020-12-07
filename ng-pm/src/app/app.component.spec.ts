import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthService } from '@ng-pm/auth';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';

describe('AppComponent', () => {
  const authService = {
    isLoggedin: jest.fn(),
    userName: jest.fn()
  };

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent, NavComponent, FooterComponent],
        imports: [RouterTestingModule],
        providers: [{ provide: AuthService, useValue: authService }]
      }).compileComponents();
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
