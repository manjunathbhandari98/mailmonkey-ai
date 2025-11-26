import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('jwt');

    if (token) {
      return true;
    }

    // Not logged in → go to landing page
    this.router.navigate(['/']);
    return false;
  }
}
