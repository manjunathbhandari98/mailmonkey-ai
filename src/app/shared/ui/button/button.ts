import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule, NgIconComponent],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
@Input() label: string = '';
  @Input() loadingText: string = 'Loading...';
  @Input() loading: boolean = false;
  @Input() disabled: boolean = false;

  @Input() variant: 'primary' | 'outline'|'secondary'|'ghost' | 'danger' = 'primary';

  @Input() iconType: 'ng-icon' | 'svg' | 'img' | null = null;
  @Input() iconValue: string | null = null;
  @Input() iconPosition: 'left' | 'right' = 'right';
  @Input() imageClass: string = '';
  @Input() customClass: string = '';
@Input() block: boolean = false;

  @Output() clicked = new EventEmitter<void>();

  onClick() {
    if (!this.disabled && !this.loading) {
      this.clicked.emit();
    }
  }

}
