import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroClock, heroDocument, heroEnvelope, heroUsers } from '@ng-icons/heroicons/outline';
import { NavbarAuth } from '../../core/navbar-auth/navbar-auth';
import { analytics } from './../../data/app-data';
import { QuickActions } from './sections/quick-actions/quick-actions';
import { RecentEmails } from './sections/recent-emails/recent-emails';

@Component({
  selector: 'app-dashboard',
  imports: [NgIconComponent, QuickActions, RecentEmails, NavbarAuth],
  providers:[
    provideIcons({
      heroEnvelope,
      heroDocument,
      heroUsers,
      heroClock
    })
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  analytics = analytics

}
