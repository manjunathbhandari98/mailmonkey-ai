import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Logo } from '../../components/logo/logo';

@Component({
  selector: 'app-navbar-public',
  imports: [Logo, RouterLink, RouterLinkActive],
  templateUrl: './navbar-public.html',
  styleUrl: './navbar-public.scss',
})
export class NavbarPublic {
    navOptions = [
  { option: 'Features', fragment: 'features' },
  { option: 'Demo', fragment: 'demo' },
  { option: 'Pricing', fragment: 'pricing' },
]


}
