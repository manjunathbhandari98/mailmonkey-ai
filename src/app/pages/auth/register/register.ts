import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { AbstractControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroEye, heroEyeSlash } from '@ng-icons/heroicons/outline';
import { Logo } from '../../../components/logo/logo';
import { AuthService } from '../../../services/auth-service/auth';
import { ToastService } from '../../../services/toast-service/toast-service';
import { Button } from '../../../shared/ui/button/button';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, Logo, RouterLink, NgIconComponent,Button],
  providers: [
    provideIcons({ heroEye, heroEyeSlash })
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {

  showPassword = signal(false);
  showConfirmPassword = signal(false);

  registerForm!: FormGroup;

  constructor(
    private router: Router,
    private auth:AuthService,
    private fb: NonNullableFormBuilder,
    private toast: ToastService
  ) {
    this.registerForm = this.fb.group(
      {
        fullName: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
      },
      { validators: this.matchPasswords }
    );
  }

  // Password match validator
  matchPasswords(control: AbstractControl): ValidationErrors | null {
    const pass = control.get('password')?.value;
    const confirm = control.get('confirmPassword')?.value;

    return pass === confirm ? null : { mismatch: true };
  }

  togglePassword() {
    this.showPassword.update(v => !v);
  }

  toggleConfirmPassword() {
    this.showConfirmPassword.update(v => !v);
  }

  onRegister() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.auth.register(this.registerForm.value).subscribe(
      {
        next:() =>{
    this.toast.success("User Registered Successfully");
    this.router.navigate(['/login']);
        },
        error:(err) =>{
          console.error('Registration error:', err);
          this.toast.error('Registration failed. Please try again.');
        }
      }
    );

  }

}
