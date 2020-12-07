import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'bbv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  failureMessage: string;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.failureMessage = '';
  }

  onSubmit() {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(
      () => {
        this.failureMessage = '';
      },
      () => {
        this.failureMessage = 'Login failed. Please check your email & password.';
      }
    );
  }
}
