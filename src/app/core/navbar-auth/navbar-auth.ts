import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroBell, heroCog6Tooth } from '@ng-icons/heroicons/outline';
import { Logo } from '../../components/logo/logo';

@Component({
  selector: 'app-navbar-auth',
  standalone:true,
  imports: [NgIconComponent, Logo, RouterLink, RouterLinkActive],
  providers:[provideIcons({
    heroBell, heroCog6Tooth
  })],
  templateUrl: './navbar-auth.html',
  styleUrl: './navbar-auth.scss',
})
export class NavbarAuth {
  profileInfo = {
    name:'John Doe',
    email:'jhon@mail.com'
  }
  getInitials(){
    if(!this.profileInfo.name) return '';
    const parts = this.profileInfo.name.split('');
    return parts[0][0].toUpperCase() + (parts[1]?.[0]?.toUpperCase() ?? '');
  }
}
