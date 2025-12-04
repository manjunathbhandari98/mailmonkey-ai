import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { heroClock, heroDocument, heroEnvelope, heroUsers } from '@ng-icons/heroicons/outline';
import { NavbarAuth } from '../../core/navbar-auth/navbar-auth';
import { FeatureCard } from '../../shared/ui/feature-card/feature-card';
import { analytics } from './../../data/app-data';
import { QuickActions } from './sections/quick-actions/quick-actions';
import { RecentEmails } from './sections/recent-emails/recent-emails';

@Component({
  selector: 'app-dashboard',
  imports: [ QuickActions, RecentEmails, NavbarAuth, FeatureCard],
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
