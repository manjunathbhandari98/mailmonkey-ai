import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent } from '@ng-icons/core';
@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [RouterLink, CommonModule, NgIconComponent],
  templateUrl: './feature-card.html',
  styleUrl: './feature-card.scss',
})
export class FeatureCard {
  @Input() title: string | null = null;
  @Input() description: string | null = null;
@Input() customClass: string = '';
  @Input() count: number | string | null = null; // for stats cards
  @Input() label: string | null = null;          // for stats usage

  @Input() icon!: string;
  @Input() iconBg: string = '#000';

  @Input() link: string | null = null; // clickable only when set
}

