import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroEye, heroEyeSlash } from '@ng-icons/heroicons/outline';

import { Logo } from '../../../components/logo/logo';
import { AuthService } from '../../../services/auth-service/auth';
import { Button } from '../../../shared/ui/button/button';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.scss',
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    NgIconComponent,
    Logo,
    Button
  ],
  providers: [
    provideIcons({ heroEye, heroEyeSlash })
  ]
})
export class Login {

  loginForm!: FormGroup;

  constructor(
    private fb: NonNullableFormBuilder,
    private router: Router,
    private auth:AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Signals
  showPassword = signal(false);

  togglePassword() {
    this.showPassword.update(v => !v);
  }

  onLogin() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    const jwt = 'FakeJwt'
    // this.auth.login(jwt)
    localStorage.setItem('token',jwt)
    this.router.navigate(['/dashboard']);
  }
}
