import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroEye, heroEyeSlash } from '@ng-icons/heroicons/outline';
import { Logo } from '../../../components/logo/logo';

@Component({
  selector: 'app-login',
  imports: [Logo, RouterLink,NgIconComponent],
  providers:[
    provideIcons({heroEye, heroEyeSlash})
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  constructor(private router:Router){}

   showPassword = signal(false);

   togglePassword() {
    this.showPassword.update(v => !v)
   }

   onLogin(){
    localStorage.setItem('jwt','fakejwt');
    this.router.navigate(['/dashboard'])
   }
}
