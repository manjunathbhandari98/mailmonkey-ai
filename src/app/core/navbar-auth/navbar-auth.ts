import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroBell, heroCog6Tooth } from '@ng-icons/heroicons/outline';
import { Logo } from '../../components/logo/logo';
import { Button } from '../../shared/ui/button/button';

@Component({
  selector: 'app-navbar-auth',
  standalone:true,
  imports: [NgIconComponent, Logo, RouterLink, RouterLinkActive, Button],
  providers:[provideIcons({
    heroBell, heroCog6Tooth
  })],
  templateUrl: './navbar-auth.html',
  styleUrl: './navbar-auth.scss',
})
export class NavbarAuth {

  constructor(private router:Router){}

  profileInfo = {
    name:'John Doe',
    email:'jhon@mail.com'
  }

  navigateToGeneration(){
    this.router.navigate(['/generate-email'])
  }

  getInitials(){
    if(!this.profileInfo.name) return '';
    const parts = this.profileInfo.name.split('');
    return parts[0][0].toUpperCase() + (parts[1]?.[0]?.toUpperCase() ?? '');
  }
}
