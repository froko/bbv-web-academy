import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

import { LogoutComponent } from './logout.component';

describe('LogoutComponent', () => {
  const authService = {
    logout: jest.fn()
  };

  const router = {
    navigate: jest.fn()
  };

  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LogoutComponent],
        providers: [
          { provide: AuthService, useValue: authService },
          { provide: Router, useValue: router }
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should logout with service', () => {
    expect(authService.logout).toHaveBeenCalled();
  });

  it('should navigate to home component', () => {
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  });
});
