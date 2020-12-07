import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';

import { AuthService, LoginState } from '@ng-pm/auth';

import { EventBusService } from '../event-bus.service';

import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  const authService = {
    isLoggedIn: jest.fn(),
    userName: jest.fn()
  };

  const router = {
    navigate: jest.fn()
  };

  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let bus: EventBusService;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NavComponent],
        providers: [
          EventBusService,
          { provide: AuthService, useValue: authService },
          { provide: Router, useValue: router }
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    authService.isLoggedIn.mockImplementationOnce(() => false);
    authService.userName.mockImplementationOnce(() => '');

    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    bus = TestBed.inject(EventBusService);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should expose not logged in state', () => {
    fixture.detectChanges();

    expect(component.loginState.userName).toBe('Log in');
  });

  it('should reflect log in state based on events from bus', () => {
    fixture.detectChanges();
    bus.publish('LoginState', LoginState.LoggedIn('John Doe'));

    expect(component.loginState.userName).toBe('John Doe');
  });

  it('should navigate to login component when not logged id', () => {
    fixture.detectChanges();
    component.navigate();

    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should navigate to logout component when logged id', () => {
    fixture.detectChanges();
    bus.publish('LoginState', LoginState.LoggedIn('John Doe'));
    component.navigate();

    expect(router.navigate).toHaveBeenCalledWith(['/logout']);
  });
});
