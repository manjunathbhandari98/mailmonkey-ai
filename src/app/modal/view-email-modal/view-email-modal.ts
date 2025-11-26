import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroArrowDownTray,
  heroArrowPath,
  heroBookmark,
  heroDocumentDuplicate,
  heroXMark
} from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-view-email-modal',
  standalone: true,
  imports: [NgIconComponent, DatePipe],
  providers: [provideIcons({
    heroXMark,
    heroDocumentDuplicate,
    heroArrowDownTray,
    heroBookmark,
    heroArrowPath
  })],
  templateUrl: './view-email-modal.html',
  styleUrl: './view-email-modal.scss'
})
export class ViewEmailModal {

  @Input() email: any;
  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.closeModal.emit();
  }

  copyEmail() {
    navigator.clipboard.writeText(this.email.content);
  }

  downloadEmail() {
    console.log("Download as PDF...");
  }

  saveEmail() {
    console.log("Saved to library...");
  }

  regenerate() {
    console.log("Regenerating version...");
  }

  useTemplate() {
    console.log("Using template...");
  }
}
