import { Component, signal } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroCheck } from '@ng-icons/heroicons/outline';
import { plans } from '../../../../data/app-data';

@Component({
  selector: 'app-pricing',
  standalone:true,
  imports: [NgIconComponent],
  providers:[
    provideIcons({heroCheck})
  ],
  templateUrl: './pricing.html',
  styleUrl: './pricing.scss',
})
export class Pricing {
plans = signal(plans)
}
