import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroCheckBadge,
  heroSparkles
} from '@ng-icons/heroicons/outline';
import { PageHeader } from '../../core/page-header/page-header';
import { EmailGenerationService } from '../../services/email-generation-service/email-generation-service';
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

  showDropdown = false;


  // Improvement Options
  improvementOptions = [
  { id: 'professional', label: 'Make it Professional' },
  { id: 'friendly', label: 'Make it Friendlier' },
  { id: 'polite', label: 'Make it More Polite' },
  { id: 'formal', label: 'Make it More Formal' },

  { id: 'shorter', label: 'Make it Shorter' },
  { id: 'longer', label: 'Make it Longer' },
  { id: 'concise', label: 'Make it More Concise' },
  { id: 'detailed', label: 'Add More Details' },

  { id: 'grammar', label: 'Fix Grammar' },
  { id: 'simple', label: 'Simplify the Language' },

  { id: 'enthusiastic', label: 'Make it Enthusiastic' },
  { id: 'persuasive', label: 'Make it More Persuasive' },
  { id: 'active', label: 'Rewrite in Active Voice' },
  { id: 'passive', label: 'Rewrite in Passive Voice' },
  { id: 'humanize', label: 'Make it More Human-like' },
  { id: 'empathy', label: 'Add Empathy' }
];

 generatedEmail:any = '';


toggleDropdown() {
  this.showDropdown = !this.showDropdown;
}

chooseOption(option: any) {
  this.selectedOption.set(option.id);
  this.showDropdown = false;
}

selectedOptionLabel() {
  return this.improvementOptions.find(o => o.id === this.selectedOption())?.label;
}


  constructor(private toast:ToastService, private emailService: EmailGenerationService) {}

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

    const payload = {
      originalEmail: base(),
      improvementType: option
    };

    this.emailService.improveEmail(payload).subscribe({
      next: (res:any) =>{
        this.generatedEmail = res.generatedEmail;
        this.isGenerating.set(false);
      },
      error: (err:any) =>{
        console.error(err);
      }
    })

    this.toast.success("Email improved successfully!");
  }

  selectOption(id: string) {
    this.selectedOption.set(id);
  }

  copyEmail() {
    const content = this.generatedEmail;
    navigator.clipboard.writeText(content);
    this.toast.success("Copied to clipboard");
  }

  downloadPDF() {
    const text = this.generatedEmail;
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
