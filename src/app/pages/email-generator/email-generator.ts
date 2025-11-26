import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroArrowDown, heroArrowPath, heroBookmark, heroClipboard, heroSparkles } from '@ng-icons/heroicons/outline';
import { PageHeader } from '../../core/page-header/page-header';
import { ToastService } from '../../services/toast-service/toast-service';

@Component({
  selector: 'app-email-generator',
  standalone: true,
  imports: [PageHeader, NgIconComponent, ReactiveFormsModule, CommonModule],
  providers: [provideIcons({ heroSparkles, heroClipboard, heroArrowDown, heroBookmark, heroArrowPath })],
  templateUrl: './email-generator.html',
  styleUrl: './email-generator.scss',
})
export class EmailGenerator {
  // form-backed fields (no ngModel)
  emailGenerationForm!: FormGroup;

  // state fields
  currentVersion = 1;
  generatedEmails: any = {
    1: { subject: '', content: '' },
    2: { subject: '', content: '' },
    3: { subject: '', content: '' }
  };

  // generation spinner
  isGenerating = signal(false);

  constructor(private fb: NonNullableFormBuilder, private toast: ToastService) {
    this.emailGenerationForm = this.fb.group({
      receiver: ['', [Validators.required]],
      sender: ['', [Validators.required]],
      emailType: ['jobApplication', [Validators.required]],
      tone: ['professional', [Validators.required]],
      subject: [''],
      keyPoints: ['', [Validators.required]]
    });
  }

  // generate: simulate async call, populate 3 versions
  generateEmail() {
    if (this.emailGenerationForm.invalid) {
      this.emailGenerationForm.markAllAsTouched();
      this.toast && this.toast.error?.('Please fill required fields');
      return;
    }

    // start spinner
    this.isGenerating.set(true);

    // collect form values
    const v = this.emailGenerationForm.value as {
      receiver: string;
      sender: string;
      emailType: string;
      tone: string;
      subject?: string;
      keyPoints: string;
    };

    // replace with real API call — below is mocked
    setTimeout(() => {
      const subjectLine = v.subject?.trim() || `${this.capitalize(v.emailType)} - ${v.sender}`;
      const baseContent = `Dear ${v.receiver || 'Hiring Manager'},\n\n` +
        `I am writing regarding ${v.emailType.replace(/([A-Z])/g, ' $1')}. ${v.keyPoints}\n\n` +
        `Best,\n${v.sender}`;

      this.generatedEmails[1] = { subject: subjectLine, content: baseContent };
      this.generatedEmails[2] = { subject: `${subjectLine} — Short`, content: `(${v.tone}) ${baseContent}` };
      this.generatedEmails[3] = { subject: `${subjectLine} — Friendly`, content: `Hi ${v.receiver || 'there'},\n\n${v.keyPoints}\n\nCheers,\n${v.sender}` };

      this.isGenerating.set(false);
      this.currentVersion = 1;
      this.toast && this.toast.success?.('Email generated');
    }, 800);
  }

  // helpers
  setVersion(v: number) {
    this.currentVersion = v;
  }

  regenerate() {
    // simple regenerate: call generate again using current values
    this.generateEmail();
  }

  clearForm() {
    this.emailGenerationForm.reset({
      receiver: '',
      sender: '',
      emailType: 'jobApplication',
      tone: 'professional',
      subject: '',
      keyPoints: ''
    });
    this.generatedEmails = { 1: { subject: '', content: '' }, 2: { subject: '', content: '' }, 3: { subject: '', content: '' } };
  }

  // clipboard / download / save (simple helpers)
  copyCurrent() {
    const text = this.generatedEmails[this.currentVersion]?.content || '';
    if (!text) { this.toast && this.toast.error?.('Nothing to copy'); return; }
    navigator.clipboard?.writeText(text).then(() => this.toast && this.toast.success?.('Copied to clipboard'));
  }

  downloadCurrent() {
    const content = this.generatedEmails[this.currentVersion]?.content || '';
    if (!content) { this.toast && this.toast.error?.('Nothing to download'); return; }

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${(this.generatedEmails[this.currentVersion]?.subject || 'email').replace(/\s+/g, '_')}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    this.toast && this.toast.success?.('Downloaded');
  }

  saveCurrent() {
    this.toast && this.toast.info?.('Save not implemented yet');
  }

  // small utility
  private capitalize(s: string) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
}
