import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { AuthService, LoginState } from '@ng-pm/auth';

import { EventBusService } from '../event-bus.service';

@Component({
  selector: 'bbv-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  loginState: LoginState;

  constructor(private router: Router, private authService: AuthService, private bus: EventBusService) {}

  ngOnInit() {
    this.loginState = LoginState.Load(this.authService.isLoggedIn(), this.authService.userName());
    this.subscription = this.bus.observe('LoginState').subscribe((state) => (this.loginState = state));
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  navigate() {
    this.router.navigate([this.loginState.routerLink]);
  }
}
