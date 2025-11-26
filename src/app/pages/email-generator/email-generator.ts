import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroArrowDown, heroArrowPath, heroBookmark, heroClipboard, heroSparkles } from '@ng-icons/heroicons/outline';
import { PageHeader } from '../../core/page-header/page-header';

@Component({
  selector: 'app-email-generator',
  standalone:true,
  imports: [PageHeader, NgIconComponent, FormsModule, CommonModule],
  providers:[provideIcons({heroSparkles, heroClipboard, 
    heroArrowDown, heroBookmark, heroArrowPath})],
  templateUrl: './email-generator.html',
  styleUrl: './email-generator.scss',
})
export class EmailGenerator {

  receiver: string = '';
  sender: string = '';
  emailType: string = 'jobApplication';
  tone: string = 'professional';
  subject: string = '';
  keypoints: string = '';

  // Versions
  currentVersion = 1;

  generatedEmails: any = {
    1: { subject: '', content: '' },
    2: { subject: '', content: '' },
    3: { subject: '', content: '' }
  };

  constructor() {}

  generateEmail() {
    // mock data for now
    this.generatedEmails[1] = {
      subject: this.subject || "Your Email Subject",
      content: `Dear Hiring Manager,

I am writing to express my strong interest in the Senior Developer position at your esteemed organization. With over five years of professional experience in software development, I am confident in my ability to contribute meaningfully to your team.

Throughout my career, I have successfully led three major projects from conception to deployment, consistently delivering high-quality solutions that meet both business objectives and user needs. My technical expertise, combined with my passion for innovation, makes me an ideal candidate for this role.

I am particularly excited about the opportunity to work with your team and contribute to your company's continued success. I would welcome the chance to discuss how my skills and experience align with your needs.

Thank you for considering my application. I look forward to hearing from you.

Best regards,
John Doe.`
    };

    this.generatedEmails[2] = {
      subject: this.subject || "Your Email Subject",
      content: `Version 2 email content generated using ${this.tone} tone...`
    };

    this.generatedEmails[3] = {
      subject: this.subject || "Your Email Subject",
      content: `Version 3 email content generated using ${this.tone} tone...`
    };
  }

  regenerate(){}

  setVersion(v: number) {
    this.currentVersion = v;
  }

  clearForm() {
    this.receiver = '';
    this.sender = '';
    this.subject = '';
    this.keypoints = '';
  }
}

