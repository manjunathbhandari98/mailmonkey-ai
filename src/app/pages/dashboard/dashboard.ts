import { Component, OnInit, signal } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { heroClock, heroDocument, heroEnvelope, heroUsers } from '@ng-icons/heroicons/outline';
import { NavbarAuth } from '../../core/navbar-auth/navbar-auth';
import { UserService } from '../../services/user-service/user-service';
import { FeatureCard } from '../../shared/ui/feature-card/feature-card';
import { Loader } from "../../shared/ui/loader/loader";
import { analytics } from './../../data/app-data';
import { QuickActions } from './sections/quick-actions/quick-actions';
import { RecentEmails } from './sections/recent-emails/recent-emails';

@Component({
  selector: 'app-dashboard',
  imports: [QuickActions, RecentEmails, NavbarAuth, FeatureCard, Loader],
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
export class Dashboard implements OnInit {
  constructor(private user: UserService){}
loading = signal(true);
currentUsername = signal<string>('');

// ngOnInit
ngOnInit() {
  this.loading.set(true);  // start loading

  this.user.loadUser().subscribe({
    next: (userData: any) => {
      this.currentUsername.set(userData.name);
      this.loading.set(false); // stop loading
    },
    error: (err) => {
      console.error("Failed to load user:", err);
      this.loading.set(false); // stop loading even on error
    }
  });
}


  analytics = analytics

}
