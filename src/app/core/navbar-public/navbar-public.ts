import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Logo } from '../../components/logo/logo';
import { Button } from '../../shared/ui/button/button';

@Component({
  selector: 'app-navbar-public',
  imports: [Logo, RouterLink, RouterLinkActive, Button],
  templateUrl: './navbar-public.html',
  styleUrl: './navbar-public.scss',
})
export class NavbarPublic {
    navOptions = [
  { option: 'Features', fragment: 'features' },
  { option: 'Demo', fragment: 'demo' },
  { option: 'Pricing', fragment: 'pricing' },
]

constructor(private router:Router){}

navigateToRegister(){
  this.router.navigate(['/register'])
}

}
