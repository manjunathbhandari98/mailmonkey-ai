import { Component } from '@angular/core';
import { Button } from '../../../../shared/ui/button/button';
import { recentEmails } from './../../../../data/app-data';

@Component({
  selector: 'app-recent-emails',
  imports: [Button],
  templateUrl: './recent-emails.html',
  styleUrl: './recent-emails.scss',
})
export class RecentEmails {
recentEmails = recentEmails
}
