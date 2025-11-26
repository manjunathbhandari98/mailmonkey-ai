import { Component } from '@angular/core';
import { recentEmails } from './../../../../data/app-data';

@Component({
  selector: 'app-recent-emails',
  imports: [],
  templateUrl: './recent-emails.html',
  styleUrl: './recent-emails.scss',
})
export class RecentEmails {
recentEmails = recentEmails
}
