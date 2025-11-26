import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Logo } from '../../components/logo/logo';

@Component({
  selector: 'app-footer',
  imports: [Logo, RouterLink, RouterLinkActive],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  footerOptions = [
    {title:'Privacy', link:'privacy'},
    {title:'Terms', link:'terms'},
    {title:'Contact', link:'contact'}
  ]

  currentYear = signal(new Date().getFullYear());

}
