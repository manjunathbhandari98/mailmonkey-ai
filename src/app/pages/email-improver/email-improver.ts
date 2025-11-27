import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroCheckBadge,
  heroSparkles
} from '@ng-icons/heroicons/outline';
import { PageHeader } from '../../core/page-header/page-header';
import { ToastService } from '../../services/toast-service/toast-service';
import { Button } from '../../shared/ui/button/button';

@Component({
  selector: 'app-email-improver',
  standalone: true,
  imports: [CommonModule, FormsModule, NgIconComponent, PageHeader, Button],
  providers: [
    provideIcons({ heroSparkles, heroCheckBadge })
  ],
  templateUrl: './email-improver.html',
  styleUrls: ['./email-improver.scss']
})
export class EmailImprover {

  // TWO-WAY BOUND INPUT
  originalEmail = signal('');
  selectedOption = signal('professional');
  isGenerating = signal(false);

  // Improvement Options
  improvementOptions = [
    { id: 'professional', label: 'Make it Professional' },
    { id: 'shorter', label: 'Make it Shorter' },
    { id: 'friendly', label: 'Make it Friendlier' },
    { id: 'grammar', label: 'Fix Grammar' }
  ];

  // OUTPUT EMAIL VERSIONS
  currentVersion = 1;
 generatedEmails: Record<number, { subject: string; content: string }> = {
  1: { subject: '', content: '' },
  2: { subject: '', content: '' },
  3: { subject: '', content: '' }
};


  constructor(private toast:ToastService) {}

  // VALIDATION LOGIC
  errorMessage = computed(() => {
  const email = this.originalEmail().trim();

  if (!email) return "Email cannot be empty.";
  if (email.length < 30) return "Email must be at least 30 characters.";

  return "";
});


  isInvalid = computed(() => this.errorMessage() !== "");


  // MAIN LOGIC 
  improveEmail() {
    if (this.isInvalid()) {
      this.toast.error(this.errorMessage());
      return;
    }

    this.isGenerating.set(true);
    const option = this.selectedOption();
    const base = this.originalEmail;

    const optionText = {
      professional: "Here is a polished, professional version:",
      shorter: "Here is a more concise version:",
      friendly: "Here is a warmer, more friendly version:",
      grammar: "Here is a corrected version with improved grammar:"
    }[option];

    setTimeout(() => {
      this.generatedEmails[1] = {
        subject: "Improved Email - Version 1",
        content: `${optionText}\n\n${base}\n\n✨ Version 1 improved content…`
      };

      this.generatedEmails[2] = {
        subject: "Improved Email - Version 2",
        content: `${optionText}\n\n${base}\n\n✨ Version 2 improved content…`
      };

      this.generatedEmails[3] = {
        subject: "Improved Email - Version 3",
        content: `${optionText}\n\n${base}\n\n✨ Version 3 improved content…`
      };

      this.isGenerating.set(false);
      this.toast.success("Your email has been improved");
    }, 700);
  }

  setVersion(v: number) {
    this.currentVersion = v;
  }

  selectOption(id: string) {
    this.selectedOption.set(id);
  }

  copyEmail() {
    const content = this.generatedEmails[this.currentVersion]?.content;
    navigator.clipboard.writeText(content);
    this.toast.success("Copied to clipboard");
  }

  downloadPDF() {
    const text = this.generatedEmails[this.currentVersion]?.content;
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "improved-email.txt";
    a.click();
    URL.revokeObjectURL(url);
  }

  regenerate() {
    this.improveEmail();
  }
}
