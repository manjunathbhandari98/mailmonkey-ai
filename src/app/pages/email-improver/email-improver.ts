import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroCheckBadge,
  heroSparkles
} from '@ng-icons/heroicons/outline';
import { PageHeader } from '../../core/page-header/page-header';
import { ToastService } from '../../services/toast-service/toast-service';

@Component({
  selector: 'app-email-improver',
  standalone: true,
  imports: [CommonModule, FormsModule, NgIconComponent, PageHeader],
  providers: [
    provideIcons({ heroSparkles, heroCheckBadge })
  ],
  templateUrl: './email-improver.html',
  styleUrls: ['./email-improver.scss']
})
export class EmailImprover {

  // USER INPUT
  originalEmail: string = `
Hi,

I wanted to reach out about the job. I have some experience and think I would be good for the role.
Let me know if you want to talk.

Thanks
  `.trim();

  improvementOptions = [
    { id: 'professional', label: 'Make it Professional' },
    { id: 'shorter', label: 'Make it Shorter' },
    { id: 'friendly', label: 'Make it Friendlier' },
    { id: 'grammar', label: 'Fix Grammar' },
  ];

  selectedOption: string = 'professional';

  // OUTPUT EMAIL VERSIONS
  currentVersion: number = 1;
  generatedEmails: { [key: number]: { subject: string; content: string } } = {
    1: { subject: '', content: '' },
    2: { subject: '', content: '' },
    3: { subject: '', content: '' }
  };

  constructor(private toast:ToastService) {}

  // MAIN IMPROVEMENT LOGIC — replace later with AI API
  improveEmail() {
    const base = this.originalEmail;

    const optionText = {
      professional: "Here is a polished, professional version of your email:",
      shorter: "Here is a more concise version of your email:",
      friendly: "Here is a warmer, more friendly version of your email:",
      grammar: "Here is a corrected version with improved grammar:"
    }[this.selectedOption] ?? "";

    // Fake versions for now
    this.generatedEmails[1] = {
      subject: "Regarding Your Job Opening",
      content: `${optionText}\n\n${base}\n\nVersion 1 improved content…`
    };

    this.generatedEmails[2] = {
      subject: "Application Follow-Up",
      content: `${optionText}\n\n${base}\n\nVersion 2 improved content…`
    };

    this.generatedEmails[3] = {
      subject: "Interest in the Position",
      content: `${optionText}\n\n${base}\n\nVersion 3 improved content…`
    };
    this.toast.success("Your email has been improved");
  }

  // SWITCH VERSION
  setVersion(v: number) {
    this.currentVersion = v;
  }

  // COPY EMAIL
  copyEmail() {
    const content = this.generatedEmails[this.currentVersion]?.content;
    if (!content) return;

    navigator.clipboard.writeText(content)
      .then(() => this.toast.info("Your email has been improved"))
      .catch(() => this.toast.error("Failed to copy"));;
  }

  // DOWNLOAD AS PDF
  downloadPDF() {
    const text = this.generatedEmails[this.currentVersion]?.content;
    if (!text) return;

    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "improved-email.txt"; // later make PDF
    a.click();

    URL.revokeObjectURL(url);
  }

  // REGENERATE (mock for now)
  regenerate() {
    this.improveEmail();
  }
}
