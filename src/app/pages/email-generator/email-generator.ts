import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { provideIcons } from '@ng-icons/core';
import { heroArrowDown, heroArrowPath, heroBookmark, heroClipboard, heroSparkles } from '@ng-icons/heroicons/outline';
import { PageHeader } from '../../core/page-header/page-header';
import { EmailGenerationService } from '../../services/email-generation-service/email-generation-service';
import { ToastService } from '../../services/toast-service/toast-service';
import { Button } from '../../shared/ui/button/button';

@Component({
  selector: 'app-email-generator',
  standalone: true,
  imports: [PageHeader, ReactiveFormsModule, CommonModule, Button],
  providers: [provideIcons({ heroSparkles, heroClipboard, heroArrowDown, heroBookmark, heroArrowPath })],
  templateUrl: './email-generator.html',
  styleUrl: './email-generator.scss',
})
export class EmailGenerator {
  // form-backed fields (no ngModel)
  emailGenerationForm!: FormGroup;
  generatedEmail: string = "";

  // generation spinner
  isGenerating = signal(false);

  constructor(
    private fb: NonNullableFormBuilder,
     private toast: ToastService,
    private emailService: EmailGenerationService
    ) {
    this.emailGenerationForm = this.fb.group({
      receiver: ['', [Validators.required]],
      sender: ['', [Validators.required]],
      emailType: ['jobApplication', [Validators.required]],
      tone: ['professional', [Validators.required]],
      subject: [''],
      content: ['', [Validators.required]]
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
      content: string;
    };

    this.emailService.generateEmail(v).subscribe({
      next:(res:any) =>{
        this.generatedEmail= res.generatedEmail;
        this.isGenerating.set(false);
      },
      error:(err:any) =>{
        console.error(err);
      }
    })


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
      content: ''
    });
    this.generatedEmail = "";
  }

  // clipboard / download / save (simple helpers)
  copyCurrent() {
    const text = this.generatedEmail || '';
    if (!text) { this.toast && this.toast.error?.('Nothing to copy'); return; }
    navigator.clipboard?.writeText(text).then(() => this.toast && this.toast.success?.('Copied to clipboard'));
  }

  downloadCurrent() {
    const content = this.generatedEmail || '';
    if (!content) { this.toast && this.toast.error?.('Nothing to download'); return; }

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${(this.generatedEmail || 'email').replace(/\s+/g, '_')}.txt`;
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
