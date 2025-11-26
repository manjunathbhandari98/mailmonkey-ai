import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroEye, heroEyeSlash } from '@ng-icons/heroicons/outline';
import { Logo } from '../../../components/logo/logo';

@Component({
  selector: 'app-register',
  imports: [Logo, RouterLink, NgIconComponent],
  providers:[provideIcons({
    heroEye, heroEyeSlash
  })],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  showPassword = signal(false);
  showConfirmPassword = signal(false);
  togglePassword(){
    this.showPassword.update(v => !v);
  }

  toggleConfirmPassword(){
    this.showConfirmPassword.update(v => !v);
  }

}
