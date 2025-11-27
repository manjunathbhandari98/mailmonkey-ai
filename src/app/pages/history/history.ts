import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroArrowDownTray,
  heroArrowPath,
  heroDocumentDuplicate,
  heroMagnifyingGlass
} from '@ng-icons/heroicons/outline';
import { PageHeader } from '../../core/page-header/page-header';
import { emailHistory } from '../../data/app-data';
import { ViewEmailModal } from '../../modal/view-email-modal/view-email-modal';
import { Button } from '../../shared/ui/button/button';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [NgIconComponent, PageHeader, DatePipe, ViewEmailModal, Button],
  providers: [provideIcons({
    heroDocumentDuplicate,
    heroArrowDownTray,
    heroArrowPath,
    heroMagnifyingGlass
  })],
  templateUrl: './history.html'
})
export class History {
  emailHistory = emailHistory;

  copy(item: any) {
    navigator.clipboard.writeText(item.content);
  }

  download(item: any) {
    console.log("Downloading...", item.id);
  }

  regenerate(item: any) {
    console.log("Regenerating...", item.id);
  }

  selectedEmail: any = null;

view(item: any) {
  this.selectedEmail = item;
}

closeModal() {
  this.selectedEmail = null;
}
}
